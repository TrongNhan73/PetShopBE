import jwt from 'jsonwebtoken';

const createjwt = (content, private_key, expiresIn) => {
    return jwt.sign(content, private_key, { expiresIn });
}

const verifyjwt = (token, private_key) => {
    return jwt.verify(token, private_key);
}
const decodejwt = (token) => {
    return jwt.decode(token);
}
export { createjwt, verifyjwt, decodejwt }