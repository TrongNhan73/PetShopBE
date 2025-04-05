import sequelize from "../database/index.js";
import { DataTypes } from "sequelize";
import Product from "./Product.model.js";
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
        product_id: {
            type: DataTypes.UUID,
            references: {
                model: Product,
                key: 'id'
            },
        }
    }
);
export default Image;