import express from "express";
import { createItem,updateItem,deleteItem,getItem,getItems} from "../controller/itemController.js";

const router = express.Router();

router.get("/items", getItems)
router.get("/item/:id", getItem);
router.post("/item", createItem);
router.put("/item/:id", updateItem);
router.delete("/item/:id", deleteItem);

export default router;