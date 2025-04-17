
import express from 'express'
import cors from './configs/cors.js';
import cookieParser from 'cookie-parser';
import AuthRoute from './routes/auth.route.js';
import ProductRoute from './routes/product.route.js';



const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors);
app.use('/api/', AuthRoute);
app.use('/api/', ProductRoute);
export default app;