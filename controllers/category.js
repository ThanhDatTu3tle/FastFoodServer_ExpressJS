import { CategoryModel } from "../models/categoryModel.js";
// import { ProductModel } from "../models/ProductModel.js";

export const getCategory = async (req, res) => {
    try {
        // const { categoryID } = req.value.params
        const category = await CategoryModel.find()
        res.status(200).json(category)
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};

// export const getCategoryProduct = async (req, res, next) => {
//     try {
//         const { categoryID } = req.value.params
//         const product = await CategoryModel.findById(categoryID).populate('products')
//         res.status(200).json({products: category.products})
//     } catch (error) {
//         res.status(500).json({ error: error })
//     } 
// };

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
