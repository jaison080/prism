import React from "react";
import CustomTitle from "../../utils/CustomTitle";
import BlogCard from "../../components/BlogCard/BlogCard";
import Navbar from "../../components/Navbar/Navbar";
import blogsData from "../../data/blogsData";

export default function Blogs() {
  return (
    <>
      <>
        <CustomTitle title="Blogs" />
        <Navbar />
        <div className={"jobs__container"}>
          <div className={"jobs__heading"}>BLOGS</div>
          <div className={"jobs__list"}>
            {blogsData.map((blog) => {
              return <BlogCard blog={blog} />;
            })}
          </div>
        </div>
      </>
    </>
  );
}
