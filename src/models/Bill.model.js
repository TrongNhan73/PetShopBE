import sequelize from "../database/index.js";
import { DataTypes } from "sequelize";
import User from "./User.model.js";
const Bill = sequelize.define('bill',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        total: {
            type: DataTypes.INTEGER,
        },
        status: {
            type: DataTypes.STRING,
        },
        is_checkout: {
            type: DataTypes.STRING,
        },
        user_id: {
            type: DataTypes.UUID,
            references: {
                model: User,
                key: 'id'
            }
        },
    }
);
export default Bill;