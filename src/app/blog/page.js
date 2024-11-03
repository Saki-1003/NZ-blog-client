"use client";
import React from "react";
import Header from "@/components/Header";
import BlogCard from "@/components/BlogCard";
import { useContext } from "react";
import { BlogDataContext } from "@/context/blogDataContext";
import Timeline from "@/components/Timeline";

const BlogPage = () => {
  const { blogData } = useContext(BlogDataContext);

  return (
    <>
      <Header />
      <section className="bg-teal-100 w-full h-lvh">
        <div className="pt-10 container mx-auto flex justify-center gap-4 xs:flex-wrap">
          {blogData &&
            blogData.map((article) => (
              <BlogCard key={article.title} article={article} />
            ))}
        </div>
      </section>
    </>
  );
};

export default BlogPage;
