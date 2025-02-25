import sequelize from "../database/index.js";
import { DataTypes } from "sequelize";
const Information = sequelize.define('information',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        age: {
            type: DataTypes.STRING,
        },
        father: {
            type: DataTypes.STRING,
        },
        mother: {
            type: DataTypes.STRING,
        },
        color: {
            type: DataTypes.STRING,
        },
        gender: {
            type: DataTypes.STRING,
        },
        health: {
            type: DataTypes.STRING,
        },
        condition: {
            type: DataTypes.STRING,
        },
        shipping: {
            type: DataTypes.STRING,
        }, total: {
            type: DataTypes.STRING,
        },
        deworming: {
            type: DataTypes.STRING,
        },
        vaccination: {
            type: DataTypes.STRING,
        },
        origin: {
            type: DataTypes.STRING,
        },
        feature: {
            type: DataTypes.STRING,
        },



    }
);
export default Information;