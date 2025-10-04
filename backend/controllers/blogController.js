import fs from "fs";
import imagekit from "../utils/imageKit.js";
import Blog from "../models/blogModel.js";
import Comment from "../models/commentModel.js";

const addBlog = async (req, res) => {
  try {
    const { title, subTitle, category, description, isPublished } = JSON.parse(
      req.body.blog
    );
    const imageFile = req.file;

    //check if all fields are avalable
    if (!title || !category || !description || !imageFile) {
      return res.json({ success: false, message: "Missing Required Fields" });
    } else {
      const fileBuffer = fs.readFileSync(imageFile.path);

      //upload image to imagekit
      const response = await imagekit.upload({
        file: fileBuffer,
        fileName: imageFile.originalname,
        folder: "/blogs",
      });

      //optimize image throught imagekit URL Tranformation
      const optimizedImageURL = imagekit.url({
        path: response.filePath,
        transformation: [
          { quality: "auto" },
          { format: "webp" },
          { width: "1280" },
        ],
      });

      const image = optimizedImageURL;

      await Blog.create({
        title,
        subTitle,
        category,
        description,
        isPublished,
        image,
      });

      res
        .status(200)
        .json({ success: true, message: "Blog added Successfully" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true });
    res.status(200).json({ success: true, blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getBlogByID = async (req, res) => {
  try {
    const { blogId } = req.params;
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog Not Found" });
    }
    res.status(200).json({ success: true, blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteBlogByID = async (req, res) => {
  try {
    const { id } = req.body;
    const deleteBlog = await Blog.findByIdAndDelete(id);
    if (!deleteBlog) {
      res.status(404).json({ success: false, message: "Blog Not Found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Blog Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const togglePublish = async (req, res) => {
  try {
    const { id } = req.body;
    const blog = await Blog.findById(id);
    blog.isPublished = !blog.isPublished;
    await blog.save();
    res.status(200).json({ success: true, message: "Blog Status Updated" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const addComment = async (req, res) => {
  try {
    const { blog, name, content } = req.body;
    await Comment.create({ blog, name, content });

    res
      .status(200)
      .json({ success: true, message: "Comment Added for Review" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getBlogComments = async (req, res) => {
  try {
    const { blogId } = req.body;
    const comments = await Comment.find({
      blog: blogId,
      isApproved: true,
    }).sort({ createdAt: -1 });

    res.status(200).json({ success: true, comments });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export {
  addBlog,
  getAllBlogs,
  getBlogByID,
  deleteBlogByID,
  togglePublish,
  addComment,
  getBlogComments,
};
