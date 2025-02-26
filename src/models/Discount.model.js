import sequelize from "../database/index.js";
import { DataTypes } from "sequelize";

const Discount = sequelize.define('discount',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        code: {
            type: DataTypes.STRING,
        },
        value: {
            type: DataTypes.INTEGER
        },
        currency: {
            type: DataTypes.STRING
        }
    }
)
export default Discount;