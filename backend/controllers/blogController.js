import fs from "fs";
import imagekit from "../utils/imageKit.js";
import Blog from "../models/blogModel.js";

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

      res.json({ success: true, message: "Blog added Successfully" });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export default addBlog;