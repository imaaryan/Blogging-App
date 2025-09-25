import React from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const AdminNavBar = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };

  return (
    <>
      <nav className="bg-white border-gray-700 dark:bg-gray-800 fixed w-full top-0 border-b z-90 ">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            onClick={() => navigate("/")}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={assets.logo} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Admin DashBoard
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={logout}
              type="button"
              className="flex flex-row  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer "
            >
              Logout
              <svg
                className="w-4 h-4 ml-2 self-center text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminNavBar;
