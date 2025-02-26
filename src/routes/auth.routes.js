import express from 'express'
import { test } from '../controllers/auth.controller.js'

const AuthRoute = express.Router();

AuthRoute.get('/test', test);
// AuthRoute.post('/login', handleLogin)

export default AuthRoute;