"use client";
import styles from "./Blog.module.css";
import { useGetBlogs } from "@/lib/hooks/useGetBlogs";
import { useEffect } from "react";
import BlogCard from "../components/BlogCard/BlogCard";
import Loader from "../components/Loader/Loader";

export default function Page() {
  const { blogs, err, getBlogs, loading } = useGetBlogs();

  useEffect(() => {
    getBlogs()
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.headings}>
        <div className={styles.heading1}>My Blogs</div>
        <div className={styles.heading2}>
          I sometimes write here, sometimes elsewhere. Find all my writings below 🖋.
        </div>
      </div>
      <div className={styles.blogContainer}>
        {loading ? (
          <Loader/>
        ) : err ? (
          <div>Failed to load blogs. Please try again later.</div>
        ) : blogs.length > 0 ? (
          blogs.map((blog) => (
            <BlogCard
              key={blog._id}
              title={blog.title}
              thumbnail={blog.thumbnail}
              creationDate={blog.createdAt}
              id={blog._id}
            />
          ))
        ) : (
          <div>No blogs available.</div>
        )}
      </div>
    </div>
  );
}

