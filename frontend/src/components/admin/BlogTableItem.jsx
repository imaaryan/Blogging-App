import React, { useEffect, useState } from "react";
import moment from "moment";


const BlogTableItem = ({blog, fetchBlogs, index, totalItems}) => {

  const { _id, title, category, createdAt, isPublished, } = blog;

  const [openDropdownId, setOpenDropdownId] = useState(null);

  const handleShow = (id) => {
    const url = `/blog/${id}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleEdit = (id) => {};

  const handleDelete = (id) => {
    // A confirmation is good practice before deleting
    if (window.confirm("Are you sure you want to delete this blog?")) {
    }
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setOpenDropdownId(null);
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <tr className="border-b dark:border-gray-700">
      <td className="px-4 py-3">{index + 1}</td>
      <th
        scope="row"
        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {title}
      </th>
      <td className="px-4 py-3">{category}</td>
      <td className="px-4 py-3">{moment(createdAt).format("Do MMMM YYYY")}</td>
      <td
        className={`px-4 py-3 ${
          isPublished ? "text-green-600" : "text-amber-500"
        }`}
      >
        {isPublished ? "Published" : "Draft"}
      </td>
      <td className="px-4 py-3 flex items-center justify-end relative">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpenDropdownId(openDropdownId === _id ? null : _id);
          }}
          className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
          type="button"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
          </svg>
        </button>
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute z-10 right-0 w-44 bg-gray-700 rounded divide-y divide-gray-600 shadow ${
            openDropdownId === _id ? "" : "hidden"
          } ${
            index >= totalItems - 3
              ? "bottom-full mb-1"
              : "top-full mt-1"
          }`}
        >
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="apple-imac-27-dropdown-button"
          >
            <li>
              <div
                onClick={() => handleShow(_id)}
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Show
              </div>
            </li>
            <li>
              <div
                onClick={() => handleEdit(_id)}
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Edit
              </div>
            </li>
          </ul>
          <div className="py-1">
            <div
              onClick={() => handleDelete(_id)}
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Delete
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default BlogTableItem;
