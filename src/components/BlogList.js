import { Link } from "react-router-dom";

function BlogList({ blogs }) {
  return (
    <div>
      <h2 style={{ margin: "20px" }}>All blogs!!</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
