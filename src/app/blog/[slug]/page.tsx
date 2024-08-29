import { connectDb } from "@/lib/mongodb";
import styles from "./SingleBlog.module.css";
import MDRender from "@/app/components/MDRender/MDRender";
import { Blog } from "@/models/Blog";

interface BlogInterface {
  title: string;
  description: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  thumbnail: string;
}

export default async function SingleBlogPage({ params }: { params: { slug: string } }) {
  await connectDb();

  const blog = await Blog.findById(params.slug).lean<BlogInterface | null>();

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const formattedDate = new Date(blog.createdAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={styles.container}>
      {blog.thumbnail && (
        <img
          src={blog.thumbnail}
          alt="Blog Thumbnail"
          className={styles.thumbnail}
        />
      )}
      <h1 className={styles.title}>{blog.title}</h1>
      <div className={styles.date}>Published on: {formattedDate}</div>
      <div className={styles.description}>
        <MDRender content={blog.description} />
      </div>
    </div>
  );
}
