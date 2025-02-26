import sequelize from "../database/index.js";
import Bill from "./Bill.model.js";
import Group from "./Group.model.js";
import Image from "./Image.model.js";
import Information from "./Information.model.js";
import Item from "./Item.model.js";
import Product from "./Product.model.js";
import Rate from "./Rate.model.js";
import Role from "./Role.model.js";
import Type from "./Type.model.js";
import User from "./User.model.js";
import Discount from "./Discount.model.js";
import "./associations.js";

const syncDB = async () => {
    await sequelize.sync({ alter: true });
    console.log('Database synced!');
};
export { Bill, Group, Image, Information, Item, Product, Rate, Role, Type, User, syncDB, Discount };