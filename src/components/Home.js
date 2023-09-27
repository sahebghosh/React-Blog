import { useState, useEffect } from "react";
import BlogList from "./BlogList";

function Home() {
  const [blogs, setBlogs] = useState(null);
  const [isDataAvailable, setDataAvailable] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3004/blogs")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data from the resource.");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setDataAvailable(false);
      })
      .catch((err) => {
        setError(err.message);
        setDataAvailable(false);
        setError(null);
      });
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isDataAvailable && <div>Loading................</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}

export default Home;
