import React from "react";
import { BlogsTab } from "../sections/Home/BlogsTab";

const BlogArchive = () => {
  return (
    <>
      <div className="flex flex-col items-center pt-[100px] pb-[50px] dark:bg-gray-900 ">
        <div className="flex flex-col items-center ">
          {" "}
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Find Our Latest Blogs
          </h1>{" "}
        </div>
      </div>
      <BlogsTab />
    </>
  );
};

export default BlogArchive;
