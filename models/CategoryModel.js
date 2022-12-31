import mongoose, { mongo } from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
}, { timestamps: true });

export const CategoryModel = mongoose.model('Category', schema);
