import sequelize from "../database/index.js";
import { DataTypes } from "sequelize";
const Group = sequelize.define('group',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
    }
);
export default Group;