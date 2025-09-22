import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ Blog }) => {
  const { _id, title, description, category, image } = Blog;
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => navigate(`/blog/${_id}`)}
        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
      >
        <img className="rounded-t-lg" src={image} alt="" />

        <div className="p-5">
          <div>
            <h6 className="text-gray-400">{category}</h6>
            <h5 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>

            <p
              className="mb-6 font-normal text-gray-700 dark:text-gray-400"
              dangerouslySetInnerHTML={{ __html: description.slice(0, 70) }}
            ></p>
          </div>
          <a
            onClick={() => navigate(`/blog/${_id}`)}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer "
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
