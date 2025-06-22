import express from "express"
import cookieParser from "cookie-parser"
import logger from "morgan"
import catchAllError from "./middleware/CatchAllError.js";
import error from "./middleware/error.js";

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(catchAllError)
app.use(error)

export default app;