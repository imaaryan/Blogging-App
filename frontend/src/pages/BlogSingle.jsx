import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, blog_data, comments_data } from "../assets/assets";
import Moment from "moment";

const Blogs = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);

  const fetchBlogData = async () => {
    const data = blog_data.find((i) => i._id === id);
    setData(data);
  };

  const fetchCommentData = async () => {
    setComments(comments_data);
  };

  useEffect(() => {
    fetchBlogData();
    fetchCommentData();
  }, []);

  return data ? (
    <>
      <main class=" pb-16 pt-8 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article class="mx-auto w-full max-w-6xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header class="mb-4 mt-16 lg:mb-6 not-format">
              <div className="flex justify-self-center text-center font-semibold bg-blue-700 text-white rounded-2xl max-w-max px-8 ">
                {" "}
                Published on: {Moment(data.createdAt).format(
                  "MMMM Do YYYY"
                )}{" "}
              </div>
              <h1 class="mb-4 mt-4 text-3xl font-extrabold leading-tight text-center text-gray-900 lg:mb-8 lg:text-4xl dark:text-white">
                {data.title}
              </h1>
              <img src={data.image} alt="" className="mb-8 rounded-2xl" />
            </header>
            <article className=" max-w-xxl mb-8 mt-16">
              <div
                className="rich-text"
                dangerouslySetInnerHTML={{ __html: data.description }}
              ></div>
            </article>

            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

            {/*Comment Section */}

            <section class="not-format">
              <div class="flex justify-between items-center mb-6">
                <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                  Discussion ({comments.length})
                </h2>
              </div>
              <form class="mb-6">
                <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <label for="comment" class="sr-only">
                    Your comment
                  </label>
                  <textarea
                    id="comment"
                    rows="6"
                    class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                    placeholder="Write a comment..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                >
                  Post comment
                </button>
              </form>


              <div>
                {comments.map((item, index) => (
                  <article key={index} class="p-6 mb-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <footer class="flex justify-between items-center mb-2">
                      <div class="flex items-center">
                        <p class="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
                          <img
                            class="mr-2 w-6 h-6 rounded-full"
                            src={assets.user_icon}
                            alt=""
                          />
                          {item.name}
                        </p>
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                          <time
                          >
                            {Moment(item.createdAt).format("MMM, DD, YYYY")}
                          </time>
                        </p>
                      </div>
                    </footer>
                    <p>
                      {item.content}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </article>
        </div>
      </main>
    </>
  ) : (
    <div>Loading...</div>
  );
};

export default Blogs;
