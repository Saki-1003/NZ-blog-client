"use client";
import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  // const isAdmin = localStorage.getItem("isAdmin");
  const isAdmin = true;

  function toggleDrawer() {
    setOpen(!open);
  }

  return (
    <nav className="bg-gray-700 h-full w-16 py-20 pt-32 fixed z-20">
      <Link href="/post">
        {isAdmin && (
          <CreateOutlinedIcon
            sx={{
              width: "100%",
              fontSize: "3rem",
              color: "#e6e6e6",
            }}
            className="hover:text-teal-500"
          />
        )}
      </Link>
      <Link href="/blog">
        <ArticleOutlinedIcon
          sx={{
            width: "100%",
            fontSize: "3rem",
            marginTop: "6rem",
            color: "#e6e6e6",
          }}
          className="hover:text-teal-500"
        />
      </Link>

      <DarkModeOutlinedIcon
        sx={{
          width: "100%",
          fontSize: "3rem",
          marginTop: "6rem",
          color: "#e6e6e6",
        }}
        className="hover:text-teal-500 cursor-pointer"
      />
    </nav>
  );
}
