import express from 'express'
import { handRegister, test, handleLogin, handleGetAccessToken, handleLogout, handLogInWithGoogle } from '../controllers/auth.controller.js'


const AuthRoute = express.Router();

AuthRoute.get('/test', test);
AuthRoute.post('/login', handleLogin);
AuthRoute.post('/register', handRegister);
AuthRoute.get('/getnewaccesstoken', handleGetAccessToken);
AuthRoute.get('/logout', handleLogout);
AuthRoute.post('/googlelogin', handLogInWithGoogle);


export default AuthRoute;