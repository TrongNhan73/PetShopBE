
import express from 'express'
import cors from './configs/cors.js';

import AuthRoute from './routes/auth.routes.js';




const app = express();
app.use(express.json())
app.use(cors);
app.use('/api/', AuthRoute);
export default app;