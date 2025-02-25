import sequelize from "../database/index.js";
import { DataTypes } from "sequelize";
import Bill from "./Bill.model.js";
import Product from "./Product.model.js";
const Item = sequelize.define('item',
    {
        bill_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            references: {
                model: Bill,
                key: 'id'
            },
            primaryKey: true,
        },
        product_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            references: {
                model: Product,
                key: 'id'
            },
            primaryKey: true,
        },
        number: {
            type: DataTypes.INTEGER,
        },
    }
);
export default Item;