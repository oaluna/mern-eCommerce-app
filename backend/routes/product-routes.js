import express from 'express';
import {
	getProducts,
	getProductById,
	deleteProduct,
	createProduct,
	updateProduct,
	createProductReview,
} from '../controllers/product-controller.js';
import { protect, isAdmin } from '../middleware/auth-middleware.js';

const router = express.Router();

router.route('/').get(getProducts).post(protect, isAdmin, createProduct);
router.route('/:id/reviews').post(protect, createProductReview);
router
	.route('/:id')
	.get(getProductById)
	.delete(protect, isAdmin, deleteProduct)
	.put(protect, isAdmin, updateProduct);

export default router;
