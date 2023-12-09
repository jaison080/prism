import React from "react";

export default function BlogCard({blog}) {
  return (
    <>
      <div class="blog__card">
        <div
          class="blog__img-container"
          style={{
            backgroundImage: `url("${blog.image}")`,
          }}
        ></div>
        <div class="blog__card-content">
          <h3>{blog.title}</h3>
          <p class="blog__excerpt">
           {blog.content}
          </p>
          <p class="blog__author">{`By ${blog.author}`}</p>
        </div>
      </div>
    </>
  );
}
