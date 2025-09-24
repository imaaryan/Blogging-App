import React, { useEffect, useState } from "react";
import { dashboard_data } from "../../assets/assets";

const AdminDashboard = () => {

    const [dashboardData, setDashboardData] = useState({
        blogs: 0,
        comments: 0,
        drafts: 0,
        recentBlogs: []
    })

    const fetchDashboardData = async ()=>{
        setDashboardData(dashboard_data)
    }

    useEffect(()=>{
        fetchDashboardData()
    }, [])

  return (
    <div className="ml-80 mt-[80px] p-4">
      <div className="flex flex-row flex-wrap gap-3">
        <div className="flex flex-row bg-gray-800 hover:bg-gray-700  py-2 px-8 rounded-md gap-4">
          <div className="self-center">
            <svg
              class="w-8 h-8 text-gray-800 dark:text-white"
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
              class="w-8 h-8 text-gray-800 dark:text-white"
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
              class="w-8 h-8 text-gray-800 dark:text-white"
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
    </div>
  );
};

export default AdminDashboard;
