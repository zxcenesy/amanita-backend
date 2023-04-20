import mongoose from "mongoose";

const Product = new mongoose.Schema({


    subtitle: {type: String, required: true},
    type: {type: String, required: true}
})

export default mongoose.model('Product', Product)