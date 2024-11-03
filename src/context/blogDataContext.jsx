"use client";
import apiClient from "@/lib/apiClient";
import { useState, useEffect, createContext } from "react";

export const BlogDataContext = createContext({});

export function BlogDataProvider({ children }) {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    async function fetchBlogData() {
      try {
        const response = await apiClient.get("/post/get_blog_articles");
        setBlogData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBlogData();
  }, []);

  return (
    <BlogDataContext.Provider value={{ blogData, setBlogData }}>
      {children}
    </BlogDataContext.Provider>
  );
}
