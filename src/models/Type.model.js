import sequelize from "../database/index.js";
import { DataTypes } from "sequelize";
import Group from "./Group.model.js";
const Type = sequelize.define('type',
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
        group_id: {
            type: DataTypes.UUID,
            references: {
                model: Group,
                key: 'id'
            }
        },
    }
);
export default Type;