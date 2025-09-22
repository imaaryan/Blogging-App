import React, { useState } from "react";
import { blog_data, blogCategories } from "../../assets/assets.js";
import Card from "../../components/Card.jsx";

export const BlogsList = () => {
  const [menu, setMenu] = useState("All");

  return (
    <div className=" py-[40px] dark:bg-gray-900 ">
      <div className="mb-8">
        <ul className="flex flex-wrap justify-center -mb-px text-sm font-medium text-center">
          {blogCategories.map((item) => (
            <li className="me-2">
              <button
                onClick={() => setMenu(item)}
                className={`inline-block px-4 py-2 rounded-lg hover:bg-gray-500 text-gray-300 dark:hover:text-gray-100 cursor-pointer ${
                  menu === item && "bg-blue-700"
                } `}
                type="button"
                key={item}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <div className="max-w-screen-xxl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-8 mb-24 mx-8 sm:mx-16 x1:mx-40">
          {blog_data
            .filter((Blog) => (menu === "All" ? true : Blog.category === menu))
            .map((Blog) => (
              <Card key={Blog._id} Blog={Blog} />
            ))}
        </div>
      </div>
    </div>
  );
};
