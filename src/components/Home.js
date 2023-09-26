import { useState } from "react";
import BlogList from "./BlogList";

function Home() {
  const [blogs, setBlogs] = useState([
    {
      title: "My Angular Tutorial!!",
      body: "lorem ipsum...",
      author: "Saheb",
      id: 1,
    },
    {
      title: "React and Vue Master!!",
      body: "lorem ipsum...",
      author: "Rajat",
      id: 2,
    },
    {
      title: "German coaching!!",
      body: "lorem ipsum...",
      author: "Ivan",
      id: 3,
    },
  ]);
  return (
    <div className="home">
      <BlogList blogs={blogs} />
    </div>
  );
}

export default Home;
