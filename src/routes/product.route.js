import express from 'express';
import { handleGetProducts } from '../controllers/product.controller.js';
import { adminCheck } from '../middlewares/admincheck.middleware.js';


const ProductRoute = express.Router();
ProductRoute.use(adminCheck)
ProductRoute.get('/getproducts', handleGetProducts);





export default ProductRoute;
