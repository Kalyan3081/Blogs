import React from "react";
import NavigationBar from "../nav/Navbar";
import GenrePicker from "./GenrePicker";
import BlogPosts from "./BlogPosts";

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <GenrePicker />
      <BlogPosts />
    </div>
  );
}
