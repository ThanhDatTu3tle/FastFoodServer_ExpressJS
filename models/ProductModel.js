import mongoose, { Schema, mongo } from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
    // nameCategory: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Category',
    // }
}, { timestamps: true });

export const ProductModel = mongoose.model('Product', ProductSchema);
