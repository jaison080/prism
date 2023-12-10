import React from "react";

export default function BlogCard({blog}) {
  return (
    <>
      <div className="blog__card">
        <div
          className="blog__img-container"
          style={{
            backgroundImage: `url("${blog.image}")`,
          }}
        ></div>
        <div className="blog__card-content">
          <h3>{blog.title}</h3>
          <p className="blog__excerpt">
           {blog.content}
          </p>
          <p className="blog__author">{`By ${blog.author}`}</p>
        </div>
      </div>
    </>
  );
}
