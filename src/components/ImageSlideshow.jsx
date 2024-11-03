"use client";
import React from "react";
import useFileFetch from "@/hook/useFileFetch";
import { Carousel } from "flowbite-react";

const ImageSlideshow = ({ article }) => {
  const urlArray = useFileFetch(article);

  return (
    <div className="h-60 sm:h-64 xl:h-80 2xl:h-96 lg:w-4/6 mx-auto">
      <Carousel>
        {urlArray.length &&
          urlArray.map((url, i) => (
            <img key={i} className="w-full object-cover" src={url} alt={url} />
          ))}
      </Carousel>
    </div>
  );
};

export default ImageSlideshow;
