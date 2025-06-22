import express from "express"
import cookieParser from "cookie-parser"
import logger from "morgan"
import catchAllError from "./middleware/CatchAllError.js";
import error from "./middleware/error.js";
import mongoose from "mongoose"

import router from "./routes/items.js";
import {connectDB} from "./data/db,js.js";

const app = express();
await connectDB()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', router);
app.use(catchAllError)
app.use(error)

export default app;