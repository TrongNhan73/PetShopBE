import * as userService from "../services/user.service.js"
import { ResponseContent } from "../utils/FormatResponse.js"
import { createjwt } from "../utils/Jwt.js"
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
        console.log(req.cookies);
        let user = await userService.findUserByEmail(email);
        if (user) {
            if (checkPassword(password, user.password)) {
                let content = {
                    email: user.email,
                    user_name: user.username,
                    role_id: user.role.id,
                    address: user.address,
                    phone: user.phone
                }

                let accessToken = createjwt(content, process.env.ACCESS_TOKEN_KEY, process.env.ACCESS_TOKEN_EXPIRESIN);
                let refreshToken = createjwt(content, process.env.REFRESH_TOKEN_KEY, process.env.REFRESH_TOKEN_EXPIRESIN);
                res.cookie('refeshToken', refreshToken, { httpOnly: true });
                user.set({ refresh_token: refreshToken });
                await user.save();

                return res.send(ResponseContent('1', 'Login successfully', { accessToken, refreshToken }));

            } else {
                return res.send(ResponseContent('-1', 'Email or password is incorrect', null));
            }
        } else {
            return res.send(ResponseContent('-1', 'Email or password is incorrect', null));

        }

    } catch (e) {
        console.log('>>>>>Err when login:');
        console.log(e);
        return res.send(ResponseContent('0', 'Error from server', null))
    }
}

const handRegister = async (req, res) => {
    try {
        const { email, username, phone, password } = req.body;

        let email_exist = await userService.findUserByEmail(email);
        if (email_exist) return res.send(ResponseContent('-1', 'The email is already exist', null));

        let phone_exist = await userService.findUserByPhone(phone);
        if (phone_exist) return res.send(ResponseContent('-2', 'The phone number is already exist', null));

        let hashpassword = hashPassword(password);
        await userService.createUser(
            {
                email, phone, username,
                password: hashpassword
            }
        );
        return res.send(ResponseContent('1', 'Successfully created a new user', null));
    } catch (e) {
        console.log(e);
        res.send(ResponseContent('0', 'Error from server', null))
    }
}





export { test, handleLogin, handRegister };