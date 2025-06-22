import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name: String,
    desc: String
});

const Item = mongoose.model("Item", itemSchema);
export default Item;
