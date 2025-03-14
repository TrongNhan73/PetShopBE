import express from 'express'
import { handRegister, test, handleLogin } from '../controllers/auth.controller.js'


const AuthRoute = express.Router();

AuthRoute.get('/test', test);
AuthRoute.post('/login', handleLogin);
AuthRoute.post('/register', handRegister);

export default AuthRoute;