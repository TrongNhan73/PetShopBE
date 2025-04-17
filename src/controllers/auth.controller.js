import { email_existed, login_failed, not_find_RT, phone_existed, RT_incorrect, RT_invalid, server_err } from "../Err.js"
import * as userService from "../services/user.service.js"
import { ResponseContent } from "../utils/FormatResponse.js"
import { createjwt, decodejwt, verifyjwt } from "../utils/Jwt.js"
import { checkPassword, hashPassword } from "../utils/Password.js"
import { config } from "dotenv"

config();


const test = (req, res) => {
    try {
        res.json({ message: 'this is the test code' })

    } catch (e) {
        res.json({ message: 'this is the test code' })
    }
}

const handleLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await userService.findUserByEmail(email);
        if (user) {
            if (checkPassword(password, user.password)) {
                let content = {
                    email: user.email,
                    user_name: user.username,
                    role_id: user.role.id,
                    address: user.address,
                    phone: user.phone,
                    img_url: user.img_url,
                }

                let accessToken = createjwt(content, process.env.ACCESS_TOKEN_KEY, +process.env.ACCESS_TOKEN_EXPIRESIN);
                const refreshToken = createjwt(content, process.env.REFRESH_TOKEN_KEY, +process.env.REFRESH_TOKEN_EXPIRESIN);
                res.cookie('refreshToken', refreshToken, { httpOnly: true, maxAge: +process.env.REFRESH_TOKEN_EXPIRESIN * 1000 });
                console.log('>>>>>>>>>');
                console.log(refreshToken);
                user.set({ refresh_token: refreshToken });
                console.log('>>>>>>>>>');
                console.log(refreshToken);
                await user.save();

                return res.send(ResponseContent('1', 'Login successfully', { accessToken, refreshToken }));

            } else {
                return res.send(login_failed);
            }
        } else {
            return res.send(login_failed);
        }

    } catch (e) {
        console.log('>>>>>Err when login:');
        console.log(e);
        return res.send(server_err)
    }
}

const handRegister = async (req, res) => {
    try {
        const { email, username, phone, password } = req.body;

        let email_exist = await userService.findUserByEmail(email);
        if (email_exist) return res.send(email_existed);

        let phone_exist = await userService.findUserByPhone(phone);
        if (phone_exist) return res.send(phone_existed);

        let hashpassword = hashPassword(password);
        await userService.createUser(
            {
                email, phone, username, img_url: '',
                password: hashpassword
            }
        );
        return res.send(ResponseContent('1', 'Successfully created a new user', null));
    } catch (e) {
        console.log(e);
        res.send(server_err)
    }
}


const handleGetAccessToken = async (req, res) => {
    const cookie = req.cookies;
    if (cookie && cookie.refreshToken) {
        try {
            const info = verifyjwt(cookie.refreshToken, process.env.REFRESH_TOKEN_KEY);
            const user = await userService.findUserByEmail(info.email);
            if (user) {
                if (user.refresh_token && user.refresh_token === cookie.refreshToken) {


                    let content = {
                        email: user.email,
                        user_name: user.username,
                        role_id: user.role.id,
                        address: user.address,
                        phone: user.phone,
                        img_url: user.img_url
                    }
                    let accessToken = createjwt(content, process.env.ACCESS_TOKEN_KEY, +process.env.ACCESS_TOKEN_EXPIRESIN);
                    return res.send(ResponseContent('1', 'Successfully', { accessToken }));

                } else {
                    console.log('>>>>RT');
                    console.log(user.refresh_token);
                    console.log('>>>>RT cookie');
                    console.log(cookie.refreshToken);
                    return res.send(RT_incorrect);

                }
            } else {
                return res.send(RT_incorrect);

            }
        } catch (e) {
            console.log(e);
            return res.send(RT_invalid);

        }
    } else {
        return res.send(not_find_RT);

    }


}

const handleLogout = async (req, res) => {
    try {
        const cookie = req.cookies;
        if (cookie.refreshToken) {
            const { email } = decodejwt(cookie.refreshToken);
            const user = await userService.findUserByEmail(email);
            if (user && user.refresh_token === cookie.refreshToken) {
                user.refresh_token = '';
                await user.save();
                res.clearCookie("refreshToken");
                return res.send(ResponseContent('1', 'Logout successfully', null));
            } else {
                return res.send(RT_incorrect);

            }
        } else {
            return res.send(not_find_RT);
        }
    } catch (e) {
        console.log(e);
        return res.send(server_err);

    }
}

// "email profile openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"
const handLogInWithGoogle = async (req, res) => {
    try {
        const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${req.body.googleAccessToken}`);
        const userInfo = await response.json();

        if (userInfo && userInfo.email) {
            const user = await userService.findUserByEmail(userInfo.email);
            if (user) {
                let content = {
                    email: user.email,
                    user_name: user.username,
                    role_id: user.role.id,
                    address: user.address,
                    phone: user.phone,
                    img_url: user.img_url
                }

                const accessToken = createjwt(content, process.env.ACCESS_TOKEN_KEY, +process.env.ACCESS_TOKEN_EXPIRESIN);
                const refreshToken = createjwt(content, process.env.REFRESH_TOKEN_KEY, +process.env.REFRESH_TOKEN_EXPIRESIN);

                res.cookie('refreshToken', refreshToken, { httpOnly: true, maxAge: +process.env.REFRESH_TOKEN_EXPIRESIN * 1000 });


                user.set({ refresh_token: refreshToken });
                await user.save();

                return res.send(ResponseContent('1', 'Login successfully', { accessToken, refreshToken }));

            } else {

                //create new user
                const data = {
                    email: userInfo.email,
                    phone: '',
                    username: userInfo.name,
                    password: '1',
                    img_url: userInfo.picture
                }
                await userService.createUser(data);


                //get info user
                const user = await userService.findUserByEmail(userInfo.email);
                let content = {
                    email: user.email,
                    user_name: user.username,
                    role_id: user.role.id,
                    address: user.address,
                    phone: user.phone,
                    img_url: user.img_url
                }

                let accessToken = createjwt(content, process.env.ACCESS_TOKEN_KEY, +process.env.ACCESS_TOKEN_EXPIRESIN);
                const refreshToken = createjwt(content, process.env.REFRESH_TOKEN_KEY, +process.env.REFRESH_TOKEN_EXPIRESIN);

                res.cookie('refreshToken', refreshToken, { httpOnly: true, maxAge: +process.env.REFRESH_TOKEN_EXPIRESIN * 1000 });


                user.set({ refresh_token: refreshToken });
                await user.save();

                return res.send(ResponseContent('1', 'Login successfully', { accessToken, refreshToken }));

            }
        }
        else {
            throw Error('>>>err when call api google');
        }

    } catch (err) {
        console.log(err);
        return res.send(server_err);
    }
}

export { test, handleLogin, handRegister, handleGetAccessToken, handleLogout, handLogInWithGoogle };

