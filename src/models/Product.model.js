import sequelize from "../database/index.js";
import { DataTypes } from "sequelize";
import Information from "./Information.model.js";
import Type from "./Type.model.js";
const Product = sequelize.define('product',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        price: {
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        rate_total: {
            type: DataTypes.FLOAT,
        },
        type_id: {
            type: DataTypes.UUID,
            references: {
                model: Type,
                key: 'id'
            }
        },
        information_id: {
            type: DataTypes.UUID,
            references: {
                model: Information,
                key: 'id'
            }
        },
    }
);
export default Product;