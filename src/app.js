
import express from 'express'
import cors from './configs/cors.js';
import cookieParser from 'cookie-parser';
import AuthRoute from './routes/auth.routes.js';




const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors);
app.use('/api/', AuthRoute);
export default app;