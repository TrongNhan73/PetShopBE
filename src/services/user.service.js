import { User } from '../models/index.js'
import { config } from 'dotenv'
config();

const findUserByEmail = async (email) => {
    return await User.findOne({ where: { email } })
}

const findUserByPhone = async (phone) => {
    return await User.findOne({ where: { phone } })
}

const createUser = async ({ email, phone, username, password }) => {
    return await User.create({ email, phone, username, password, address: '', refresh_token: '', role_id: process.env.ROLE_ID_USER });
}

export {
    findUserByEmail,
    findUserByPhone,
    createUser
}