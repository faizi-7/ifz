import { notFound } from "next/navigation";
import styles from './SingleBlog.module.css';
import MDRender from "@/app/components/MDRender/MDRender";
interface Blog {
  title: string;
  description: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  thumbnail: string;
}

async function getABlog(id: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/admin/blog/${id}`, { method: "GET" });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch blog: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    return data;
  } catch (err) {
    throw new Error(`Failed to fetch blog: ${err}`);
  }
}

export default async function SingleBlogPage({ params }: { params: { slug: string } }) {
  try {
    const blog:Blog = await getABlog(params.slug);

    if (!blog) {
      return notFound();
    }

    const formattedDate = new Date(blog.createdAt).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    return (
      <div className={styles.container}>
        {blog.thumbnail && <img src={blog.thumbnail} alt="Blog Thumbnail" className={styles.thumbnail} />}
        <h1 className={styles.title}>{blog.title}</h1>
        <div className={styles.date}>Published on: {formattedDate}</div>
        <div className={styles.description}>

          <MDRender content={blog.description}/>
        </div>
      </div>
    );
  } catch (err) {
    console.error("Error fetching blog:", err);
    return <div className={styles.error}>Error loading blog. Please try again later.</div>;
  }
}
