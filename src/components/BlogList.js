import React from "react";

function BlogList({ blogs }) {
  return (
    <div>
      <h2 style={{ margin: "20px" }}>All blogs!!</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
