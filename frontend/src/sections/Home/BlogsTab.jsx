import React, { useState } from "react";
import { blogCategories } from "../../assets/assets.js";

export const BlogsTab = () => {
  return (
    <div className=" py-[40px] dark:bg-gray-900 ">
      <div className="mb-4">
        <ul
          className="flex flex-wrap justify-center -mb-px text-sm font-medium text-center"
          id="default-tab"
          data-tabs-toggle="#default-tab-content"
          role="tablist"
        >
          <li className="me-2" role="presentation">
            <button
              className="inline-block px-4 py-2 bg-blue-700 rounded-lg  text-gray-100 "
              id="profile-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              All
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className="inline-block px-4 py-2 rounded-lg hover:bg-gray-300 text-gray-300 dark:hover:text-blue-700"
              id="dashboard-tab"
              data-tabs-target="#dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
            >
              Technology
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className="inline-block px-4 py-2 rounded-lg hover:bg-gray-300 text-gray-300 dark:hover:text-blue-700"
              id="settings-tab"
              data-tabs-target="#settings"
              type="button"
              role="tab"
              aria-controls="settings"
              aria-selected="false"
            >
              Startup
            </button>
          </li>
          <li role="presentation">
            <button
              className="inline-block px-4 py-2 rounded-lg hover:bg-gray-300 text-gray-300 dark:hover:text-blue-700"
              id="contacts-tab"
              data-tabs-target="#contacts"
              type="button"
              role="tab"
              aria-controls="contacts"
              aria-selected="false"
            >
              Lifestyle
            </button>
          </li>
        </ul>
      </div>
      <div id="default-tab-content">
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Profile tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classNamees to control the
            content visibility and styling.
          </p>
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Dashboard tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classNamees to control the
            content visibility and styling.
          </p>
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="settings"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Settings tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classNamees to control the
            content visibility and styling.
          </p>
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="contacts"
          role="tabpanel"
          aria-labelledby="contacts-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Contacts tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classNamees to control the
            content visibility and styling.
          </p>
        </div>
      </div>
    </div>
  );
};

export const BlogsList = () => {

  const [menu, setMenu] = useState("All")

  return (
    <div className=" py-[40px] dark:bg-gray-900 ">
      <div className="mb-4">
        <ul className="flex flex-wrap justify-center -mb-px text-sm font-medium text-center">
          {blogCategories.map((item) => (
            <li className="me-2">
              <button
              onClick={()=>(setMenu(item))}
                className={`inline-block px-4 py-2 rounded-lg hover:bg-gray-500 text-gray-300 dark:hover:text-gray-100 cursor-pointer ${menu === item && "bg-blue-700"} `}
                type="button"
                key={item}
              >
                {item}
              </button>
            </li>
          ))};
        </ul>
      </div>
    </div>
  );
};
