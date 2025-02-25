import sequelize from "../database/index.js";
import { DataTypes } from "sequelize";
const Image = sequelize.define('image',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        image_url: {
            type: DataTypes.STRING,
        },
        type: {
            type: DataTypes.STRING,
        },
        owner_id: {
            type: DataTypes.UUID
        }
    }
);
export default Image;