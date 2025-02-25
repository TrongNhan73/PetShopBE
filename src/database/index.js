import { Sequelize } from "sequelize";
import env from 'dotenv'
env.config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_CLIENT, process.env.DB_PASSWORD, {
    host: '127.0.0.1',
    dialect: 'mysql',
    pool: {
        max: 6,
        min: 0
    }
},);
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully!');
    } catch (error) {
        console.error('Database connection failed:', error);
    }
}
export default sequelize;
export { connectDB };