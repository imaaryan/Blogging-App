import React, { useEffect, useState } from "react";
import { dashboard_data } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const AdminDashboard = () => {
  const navigate = useNavigate();

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

  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });

  const fetchDashboardData = async () => {
    setDashboardData(dashboard_data);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div className="ml-80 mt-[80px] p-4">
      <div className="flex flex-row flex-wrap gap-3">
        <div className="flex flex-row bg-gray-800 hover:bg-gray-700  py-2 px-8 rounded-md gap-4">
          <div className="self-center">
            <svg
              className="w-8 h-8 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 3v4a1 1 0 0 1-1 1H5m4 8h6m-6-4h6m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="text-2xl font-bold ">{dashboardData.blogs}</div>
            <div className="">Blogs</div>
          </div>
        </div>
        <div className="flex flex-row bg-gray-800 hover:bg-gray-700  py-2 px-8 rounded-md gap-4">
          <div className="self-center">
            <svg
              className="w-8 h-8 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="text-2xl font-bold ">{dashboardData.comments}</div>
            <div className="">Comments</div>
          </div>
        </div>
        <div className="flex flex-row bg-gray-800 hover:bg-gray-700 py-2 px-8 rounded-md gap-4">
          <div className="self-center">
            <svg
              className="w-8 h-8 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="text-2xl font-bold ">{dashboardData.drafts}</div>
            <div className="">Drafts</div>
          </div>
        </div>
      </div>
      {/* latest blogs */}
      <section className="w-7xl mt-16 bg-gray-50 dark:bg-gray-900  pb-[80px] ">
        <div className="mx-auto   ">
          {/* <!-- Start coding here --> */}
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-1/2">
                <h2 className="text-xl font-bold">Latest Blogs</h2>
              </div>
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <button
                  onClick={() => navigate("/dashboard/addblog")}
                  type="button"
                  className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 cursor-pointer "
                >
                  <svg
                    className="w-4 h-4 mr-2 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 12h14m-7 7V5"
                    />
                  </svg>
                  Add New Blog
                </button>
                <button
                  onClick={() => navigate("/dashboard/bloglist")}
                  class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 group"
                  type="button"
                >
                  <svg
                    class="w-4 h-4 mr-2 dark:text-gray-400 group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 12v1h4v-1m4 7H6a1 1 0 0 1-1-1V9h14v9a1 1 0 0 1-1 1ZM4 5h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                    />
                  </svg>
                  See All
                </button>
              </div>
            </div>
            <div>
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      #
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Blog Title
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Date
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dashboardData.recentBlogs.map((item, index) => (
                    <tr
                      key={item._id}
                      className="border-b dark:border-gray-700"
                    >
                      <td className="px-4 py-3">{index + 1}</td>
                      <th
                        scope="row"
                        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.title}
                      </th>
                      <td className="px-4 py-3">{item.category}</td>
                      <td className="px-4 py-3">
                        {moment(item.createdAt).format("Do MMMM YYYY")}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          item.isPublished ? "text-green-600" : "text-amber-500"
                        }`}
                      >
                        {item.isPublished ? "Published" : "Draft"}
                      </td>
                      <td className="px-4 py-3 flex items-center justify-end relative">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenDropdownId(
                              openDropdownId === item._id ? null : item._id
                            );
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
                            openDropdownId === item._id ? "" : "hidden"
                          } ${
                            index >= dashboardData.recentBlogs.length - 3
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
                                onClick={() => handleShow(item._id)}
                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Show
                              </div>
                            </li>
                            <li>
                              <div
                                onClick={() => handleEdit(item._id)}
                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Edit
                              </div>
                            </li>
                          </ul>
                          <div className="py-1">
                            <div
                              onClick={() => handleDelete(item._id)}
                              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                            >
                              Delete
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
