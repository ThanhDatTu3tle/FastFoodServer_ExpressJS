import { CategoryModel } from "../models/categoryModel.js";
import { ProductModel } from "../models/ProductModel.js";

export const getPromotion = async (req, res) => {
    try {
        const promotion = await ProductModel.find()
        res.status(200).json(promotion)
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};

// export const createCategory = async (req, res) => {
//     try {
//         const newCategory = req.body
//         const category = new CategoryModel(newCategory)
//         await category.save()

//         res.status(200).json(category)
//     } catch (error) {
//         res.status(500).json({ error: error })
//     } 
// };

// export const updateCategory = async (req, res) => {
//     try {
//         const updateCategory = req.body
//         const category = await CategoryModel.findOneAndUpdate({ _id: updateCategory._id }, updateCategory, { new: true })

//         res.status(200).json(category)
//     } catch (error) {
//         res.status(500).json({ error: error })
//     } 
// };
