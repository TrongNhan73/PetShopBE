import bcrypt from "bcrypt";

const hashPassword = (password) => {
    let salt = bcrypt.genSaltSync(5);
    return bcrypt.hashSync(password, salt);
}

const checkPassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
}

export {
    hashPassword,
    checkPassword
}