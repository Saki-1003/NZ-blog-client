"use client";
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useContext } from "react";
import Link from "next/link";
import { AuthContext } from "@/context/authContext";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { usePathname } from "next/navigation";
import { BlogDataContext } from "@/context/blogDataContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState();
  const { user, logout } = useContext(AuthContext);
  const { blogData, setBlogData } = useContext(BlogDataContext);
  const path = usePathname();

  function toggleDrawer() {
    setOpen(!open);
  }

  function filterByKeyword(e) {
    console.log(blogData);
    e.preventDefault();
    const filteredByKeyword =
      blogData &&
      blogData.filter((article) =>
        article.title.toLowerCase().includes(keyword.toLowerCase())
      );
    setBlogData(filteredByKeyword);
  }

  return (
    <header className="bg-teal-600 p-4 px-28 text-white flex justify-between items-center w-full border-b-black">
      <h1 className="font-semibold text-3xl hover:text-gray-200 ">
        <Link href="/">Wanderlust NZ</Link>
      </h1>
      <ul className="flex space-x-4">
        {path === "/blog" && (
          <>
            <SearchOutlinedIcon
              sx={{
                fontSize: "2.2rem",
                alignSelf: "center",
                color: "gray",
                position: "absolute",
                transform: "translateX(50%)",
                zIndex: "30",
              }}
              className="hover:text-blue-200 cursor-pointer"
              onClick={filterByKeyword}
            />
            <input
              className="text-gray-900 rounded-full relative pl-10"
              onChange={(e) => setKeyword(e.target.value)}
              value={keyword}
            />
          </>
        )}
        {user ? (
          <button
            onClick={logout}
            className="bg-white text-gray-900 py-2 px-3 rounded-lg font-medium"
          >
            Log out
          </button>
        ) : (
          <Link
            href="/login"
            className="bg-white text-gray-900 py-2 px-3 rounded-lg font-medium"
          >
            Login
          </Link>
        )}
        {user ? (
          ""
        ) : (
          <Link
            href="/signup"
            className="bg-white text-gray-900 py-2 px-3 rounded-lg font-medium"
          >
            Sign Up
          </Link>
        )}
      </ul>
      {/* <div className="mobile_menu">
          <MenuIcon sx={{ fontSize: "5rem" }} onClick={toggleDrawer} />
          <Drawer anchor={"top"} open={open} onClose={toggleDrawer}>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
          </Drawer>
        </div> */}
    </header>
  );
}
