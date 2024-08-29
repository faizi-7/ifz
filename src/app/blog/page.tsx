import styles from "./Blog.module.css";
import { Blog } from "@/models/Blog";
import BlogCard from "../components/BlogCard/BlogCard";
import { connectDb } from "@/lib/mongodb";

interface BlogInterface {
  title: string;
  description: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  thumbnail: string;
}

interface PageProps {
  blogs: BlogInterface[];
  err: string | null;
}

export default async function Page() {
  let blogs: BlogInterface[] = [];
  let err: string | null = null;

  try {
    await connectDb();
    const res = await Blog.find().lean();
    blogs = res.map((blog: any) => ({
      title: blog.title,
      description: blog.description,
      _id: blog._id.toString(),
      createdAt: blog.createdAt.toISOString(),
      updatedAt: blog.updatedAt.toISOString(),
      thumbnail: blog.thumbnail,
    }));
  } catch (error: any) {
    console.error(error);
    err = "Failed to load blogs.";
  }

  return (
    <div className={styles.container}>
      <div className={styles.headings}>
        <div className={styles.heading1}>My Blogs</div>
        <div className={styles.heading2}>
          I sometimes write here, sometimes elsewhere. Find all my writings below 🖋.
        </div>
      </div>
      <div className={styles.blogContainer}>
        {err ? (
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
