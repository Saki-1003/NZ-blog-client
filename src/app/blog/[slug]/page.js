"use client";
import React from "react";
import Header from "@/components/Header";
import { useContext } from "react";
import { BlogDataContext } from "@/context/blogDataContext";
import { useParams } from "next/navigation";
import ImageSlideshow from "@/components/ImageSlideshow";
import Timeline from "@/components/Timeline";

const DetailedArticlePage = () => {
  const { blogData } = useContext(BlogDataContext);

  const param = useParams();
  const article = blogData.find(
    (blog) => blog.title.replaceAll(" ", "_") === param.slug
  );

  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="container w-2/3 h-svh mx-auto py-16 mt-8 rounded-lg bg-blue-950">
          <h2 className="text-4xl mb-5 md:mb-7 text-center font-semibold pb-4 text-white">
            {article && article.title}
          </h2>
          <section className="w-4/5 mx-auto">
            <ImageSlideshow article={article} />
            <section className="text-center text-white">
              <p className="md:w-4/6 inline-block text-left pt-8 text-lg">
                {article && article.content}
              </p>
            </section>
          </section>
        </section>
        {/* <hr className="bg-gray-950 mt-24 w-5/6 mx-auto" /> */}
        <section className="w-full mx-auto py-12">
          <h2 className="w-full bg-gray-100 mx-auto text-center text-3xl py-8 font-semibold">
            Leave Comments
          </h2>
          <Timeline />
        </section>
      </main>
    </>
  );
};

export default DetailedArticlePage;
