"use client";
import React from "react";
import { useState } from "react";
import apiClient from "@/lib/apiClient";
import Header from "@/components/Header";
import ImageLoader from "@/components/ImageLoader";

const BlogPost = () => {
  const [blogTitle, setBlogTitle] = useState();
  const [blogCategory, setBlogCategory] = useState();
  const [blogSummary, setBlogSummary] = useState();
  const [blogContent, setBlogContent] = useState();
  const [filePathList, setFilePathList] = useState();

  const handleFileChange = (filePaths) => {
    setFilePathList(filePaths);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await apiClient.post("/post/post_blog_article", {
        title: blogTitle,
        category: blogCategory,
        summary: blogSummary,
        content: blogContent,
        file: filePathList,
      });
      setBlogTitle("");
      setBlogCategory("");
      setBlogSummary("");
      setBlogContent("");
    } catch (error) {
      alert(
        "No authorized access. Please login with the authorised credentials."
      );
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto py-4">
        <div className="bg-white shadow-md rounded p-4 mb-4">
          <h2 className="text-3xl font-bold text-lime-600 mb-5">
            Post New Blog
          </h2>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              value={blogTitle}
              onChange={(e) => setBlogTitle(e.target.value)}
              required
              className="mt-1 mb-4 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <select
              onChange={(e) => setBlogCategory(e.target.value)}
              value={blogCategory}
              required
              className="w-full h-12 p-2 mb-3 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option hidden className="text-gray-300">
                --Please select a category--
              </option>
              <option>Hiking/Tramping</option>
              <option>Beaches</option>
              <option>Animals</option>
              <option>Landscape</option>
            </select>
            <label
              htmlFor="summary"
              className="block text-sm font-medium text-gray-700"
            >
              Summary
            </label>
            <textarea
              onChange={(e) => setBlogSummary(e.target.value)}
              value={blogSummary}
              required
              className="w-full h-24 p-2 mb-3 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              Content
            </label>
            <textarea
              onChange={(e) => setBlogContent(e.target.value)}
              value={blogContent}
              required
              className="w-full h-24 p-2 mb-3 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <div className="w-full mb-5 flex justify-center lg:justify-start items-center">
              <ImageLoader
                blogTitle={blogTitle}
                handleFileChange={handleFileChange}
              />
            </div>
            <button
              type="submit"
              className="mt-2 bg-gray-700 hover:bg-green-700 duration-200 text-white font-semibold py-2 px-4 rounded"
            >
              Post
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;
