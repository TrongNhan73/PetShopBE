import * as userService from "../services/user.service.js"
import { ResponseContent } from "../utils/FormatResonse.js"
import { hashPassword } from "../utils/Password.js"



const test = (req, res) => {
    try {
        res.json({ message: 'this is the test code' })

    } catch (e) {
        res.json({ message: 'this is the test code' })
    }
}

const handleLogin = async (req, res) => {
    return res.send({ message: 'success' });
}

const handRegister = async (req, res) => {
    try {
        const { email, username, phone, password } = req.body;

        let email_exist = await userService.findUserByEmail(email);
        if (email_exist) return res.send(ResponseContent('-1', 'The email is already exist', []));

        let phone_exist = await userService.findUserByPhone(phone);
        if (phone_exist) return res.send(ResponseContent('-2', 'The phone number is already exist', []));

        let hashpassword = hashPassword(password);
        await userService.createUser(
            {
                email, phone, username,
                password: hashpassword
            }
        );
        return res.send(ResponseContent('1', 'Successfully created a new user', []));
    } catch (e) {
        console.log(e);
        res.send(ResponseContent('0', 'Error from server', []))
    }
}





export { test, handleLogin, handRegister };