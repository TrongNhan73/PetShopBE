import app from './app.js'
import env from 'dotenv'
import { syncDB } from './models/index.js';
import { connectDB } from './database/index.js';

env.config();
connectDB();
syncDB();
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});