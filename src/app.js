
import express from 'express'

import AuthRoute from './routes/auth.routes.js';

const app = express();
app.use('/api/', AuthRoute);
export default app