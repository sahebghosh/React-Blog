import { useState, useEffect } from "react";
import BlogList from "./BlogList";

function Home() {
  const [blogs, setBlogs] = useState(null);

  const deleteHandler = (id) => {
    const nonDeletedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(nonDeletedBlogs);
  };

  useEffect(() => {
    fetch("http://localhost:3004/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} handleDelete={deleteHandler} />}
    </div>
  );
}

export default Home;
