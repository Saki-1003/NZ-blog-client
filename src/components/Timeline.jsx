"use client";
import React from "react";
import CommentPost from "./CommentPost";
import { useState, useEffect } from "react";
import apiClient from "@/lib/apiClient";

const Timeline = () => {
  const [text, setText] = useState();
  const [commentsArray, setCommentsArray] = useState([]);

  //Fetch comments from database
  useEffect(() => {
    async function fetchLatestComments() {
      try {
        const response = await apiClient.get("/comments/get_latest_comments");
        setCommentsArray(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchLatestComments();
  }, []);

  //Post comments in databae
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const newComment = await apiClient.post("/comments/comment", {
        textField: text,
      });
      setCommentsArray((prevComments) => [newComment.data, ...prevComments]);
      setText("");
    } catch (error) {
      alert("Please login to post a comment.");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto py-4">
        <div className="bg-white shadow-md rounded p-4 mb-4">
          <form onSubmit={handleSubmit}>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full h-24 p-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="What's on your mind?"
            ></textarea>
            <button
              type="submit"
              className="mt-2 bg-gray-700 hover:bg-green-700 duration-200 text-white font-semibold py-2 px-4 rounded"
            >
              Post
            </button>
          </form>
        </div>
        {commentsArray.map((comment) => (
          <CommentPost key={comment.id} comment={comment} />
        ))}
      </main>
    </div>
  );
};

export default Timeline;
