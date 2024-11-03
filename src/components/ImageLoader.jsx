"use client";
import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import storage from "@/lib/firebase";
import { ref, uploadBytesResumable } from "firebase/storage";

const ImageLoader = ({ blogTitle, handleFileChange }) => {
  const [loading, setLoading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const filePathArry = [];

  function handleFileUpload(e) {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const filePath = "image/" + blogTitle + "_" + file.name;
      filePathArry.push(filePath);
      const storageRef = ref(storage, filePath);
      const uploadImage = uploadBytesResumable(storageRef, file);
      uploadImage.on(
        "state_changed",
        (snapshot) => {
          setLoading(true);
        },
        (error) => {
          console.log(error);
        },
        () => {
          setLoading(false);
          setIsUploaded(true);
        }
      );
    });
    handleFileChange(filePathArry.join(","));
  }

  return (
    <>
      {loading ? (
        <h2 className="text-blue-600">Uploading....</h2>
      ) : (
        <>
          {isUploaded ? (
            <h2 className="text-blue-600">Image uploaded!</h2>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-6 px-9 rounded-lg text-gray-500 shadow">
              <div>
                <h2 className="font-semibold mb-3">Upload Image</h2>
                <p className="mb-2">JPEG/JPG/PNG only</p>
              </div>
              <div className="border-dashed border-2 border-cyan-700 py-9 px-16 relative">
                <div className="imageLogoAndText">
                  <img src="image.svg" alt="imagelogo" />
                  <p className="mt-0">drag & drop here</p>
                </div>
                <input
                  type="file"
                  className="absolute top-0 left-0 w-full h-full cursor-pointer opacity-0"
                  multiple
                  name="imageURL"
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={handleFileUpload}
                />
              </div>
              <p>OR</p>
              <Button variant="contained">
                select file
                <input
                  type="file"
                  multiple
                  accept="iimage/png, image/jpeg, image/jpg"
                  className="absolute top-0 left-0 w-full h-full cursor-pointer opacity-0"
                />
              </Button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ImageLoader;
