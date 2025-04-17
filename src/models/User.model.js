import sequelize from "../database/index.js";
import { DataTypes } from "sequelize";
import Role from "./Role.model.js";
const User = sequelize.define('user',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.STRING,
        },
        address: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        refresh_token: {
            type: DataTypes.STRING(1000),
        },
        username: {
            type: DataTypes.STRING,
        },
        img_url: {
            type: DataTypes.STRING,
        },
        role_id: {
            type: DataTypes.UUID,
            references: {
                model: Role,
                key: 'id'
            }
        },
    }
);
export default User;