import sequelize from "../database/index.js";
import { DataTypes } from "sequelize";
import Product from "./Product.model.js";
const Rate = sequelize.define('rate',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        star_number: {
            type: DataTypes.FLOAT,
        },
        comment: {
            type: DataTypes.STRING,
        },
        product_id: {
            type: DataTypes.UUID,
            references: {
                model: Product,
                key: 'id'
            }
        },
    }
);
export default Rate;