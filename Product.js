import mongoose from "mongoose";

const Product = new mongoose.Schema({

    _id: {type: Number, required: false},
    subtitle: {type: String, required: true},
    type: {type: String, required: true}
})

export default mongoose.model('Product', Product)