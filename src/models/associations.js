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

Role.hasMany(User, { foreignKey: 'role_id' });
User.belongsTo(Role, { foreignKey: 'role_id' });

Bill.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Bill, { foreignKey: 'user_id' });

Bill.hasMany(Item, { foreignKey: 'bill_id' });
Item.belongsTo(Bill, { foreignKey: 'bill_id' });

Product.hasMany(Image, { foreignKey: 'product_id' });
Item.belongsTo(Product, { foreignKey: 'product_id' });

Rate.belongsTo(Product, { foreignKey: 'product_id' });
Product.hasOne(Rate, { foreignKey: 'product_id' });

Product.belongsTo(Information, { foreignKey: 'information_id' });
Information.hasOne(Product, { foreignKey: 'information_id' });

Type.hasOne(Product, { foreignKey: 'type_id' });
Product.belongsTo(Type, { foreignKey: 'type_id' });

Type.belongsTo(Group, { foreignKey: 'group_id' });
Group.hasMany(Type, { foreignKey: 'group_id' });

