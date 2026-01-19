import express from "express";
const authorRouter = express.Router();
import {
  getAuthors,
  addAuthor,
  deleteAuthor,
   updateAuthor
} from "../controllers/authorController.js";

authorRouter.get("/", getAuthors);
authorRouter.post("/", addAuthor);
authorRouter.delete("/:id", deleteAuthor);
authorRouter.put("/:id", updateAuthor);

export default authorRouter;
