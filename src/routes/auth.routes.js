import express from 'express'
import { handRegister, test, handleLogin, handleGetAccessToken } from '../controllers/auth.controller.js'


const AuthRoute = express.Router();

AuthRoute.get('/test', test);
AuthRoute.post('/login', handleLogin);
AuthRoute.post('/register', handRegister);
AuthRoute.get('/getnewaccesstoken', handleGetAccessToken);

export default AuthRoute;