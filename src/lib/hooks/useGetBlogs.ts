import { useState, useEffect } from "react";

interface Blog {
  title: string;
  description: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  thumbnail: string;
}

export function useGetBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [err, setErr] = useState<string>("");

  async function getBlogs() {
    setErr("");

    try {
      const res = await fetch("/api/admin/blog", { method: "GET" });
      if (res.ok) {
        const data = await res.json();
        setBlogs(data);
      } else {
        setErr("Error Getting Blogs");
      }
    } catch (err: any) {
      console.error(err.message);
      setErr(err.message || String(err));
    } finally {
      setLoading(false); // Set loading to false after the fetch is complete
    }
  }

  return { blogs, loading, err, getBlogs };
}
