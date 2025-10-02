import express from "express";
import { addBlog, deleteBlogByID, getAllBlogs, getBlogByID, togglePublish } from "../controllers/blogController.js";
import upload from "../middlewares/multer.js";
import auth from "../middlewares/auth.js";

const blogRouter = express.Router();

blogRouter.post("/add", upload.single("image"), auth, addBlog);
blogRouter.get("/all", getAllBlogs);
blogRouter.get("/:blogId", getBlogByID);
blogRouter.post("/delete", auth, deleteBlogByID)
blogRouter.post("/toggle-publish", auth, togglePublish)

export default blogRouter;
