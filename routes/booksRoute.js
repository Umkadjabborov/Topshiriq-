import express from "express";
export const paymentRouter = express.Router();
import {pool} from "../db_connection.js";

groupRouter.get("/",getBooks );

groupRouter.delete("/:id", deleteBooks);

groupRouter.post("/",postBooks);

groupRouter.post("/",addBooks);