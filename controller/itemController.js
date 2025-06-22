import Item from "../data/model/item.js";
import mongoose from "mongoose";

export const getItems = async(req,res,next) => {
    try{
        const items = await Item.find()
        res.json(items)
    }catch (e) {
        const error = new Error(e.message)
        error.status = 500
        return next(error)
    }
}

export const getItem = async (req, res, next) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        const error = new Error("Invalid ObjectId");
        error.status = 400;
        return next(error);
    }

    try {
        const item = await Item.findById(id);
        if (!item) {
            const error = new Error("Item not found");
            error.status = 404;
            return next(error);
        }
        res.json(item);
    } catch (e) {
        const error = new Error(e.message);
        error.status = 500;
        return next(error);
    }
}

export const createItem = async (req,res,next)=>{
    if (!(req.body.name)||!(req.body.desc)){
        const error = new Error("Missing params")
        error.status = 400
        return next(error)
    }
    try{
        const item = new Item(req.body)
        await item.save()
        res.status(200).json(item)
    }
    catch (e) {
        const error = new Error(e.message)
        error.status = 400
        return next(error)
    }
}

export const updateItem = async (req, res, next) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        const error = new Error("Invalid ObjectId");
        error.status = 400;
        return next(error);
    }
    try {
        const item = await Item.findOneAndUpdate({ id }, req.body, { new: true });
        if (!item) {
            const error = new Error("Item not found");
            error.status = 404;
            return next(error);
        }
        res.json(item);
    } catch (e) {
        const error = new Error(e.message);
        error.status = 500;
        return next(error);
    }
}

export const deleteItem = async (req, res, next) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        const error = new Error("Invalid ObjectId");
        error.status = 400;
        return next(error);
    }

    try {
        const item = await Item.findByIdAndDelete(id);
        if (!item) {
            const error = new Error("Item not found");
            error.status = 404;
            return next(error);
        }
        res.json({ message: "Item deleted successfully" });
    } catch (e) {
        const error = new Error(e.message);
        error.status = 500;
        return next(error);
    }
};
