import express from 'express';
import { getCategory } from '../controllers/category.js';

const router = express.Router()

// Category
router.get('/', getCategory)
// router.post('/', createCategory)
// router.post('/update', updateCategory)

export default router;
