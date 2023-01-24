import mongoose, { Schema } from "mongoose";

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    // products: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Product'
    // }]
}, { timestamps: true });

export const CategoryModel = mongoose.model('Category', CategorySchema);
