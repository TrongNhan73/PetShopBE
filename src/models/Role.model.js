import sequelize from "../database/index.js";
import { DataTypes } from "sequelize";
const Role = sequelize.define('role',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
    }
);
export default Role;