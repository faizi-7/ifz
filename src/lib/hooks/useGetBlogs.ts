import { useState, useEffect } from "react";

interface BlogInterface {
  title: string;
  description: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  thumbnail: string;
}

export function useGetBlogs() {
  const [blogs, setBlogs] = useState<BlogInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [err, setErr] = useState<string>("");

  async function getBlogs() {
    setErr("");
    setLoading(true);

    try {
      const res = await fetch('/api/admin/blog', {method : "GET"})
      const data=  await res.json()
      if (res) {
        setBlogs(data);
      } else {
        setErr("Error Getting Blogs");
      }
    } catch (err: any) {
      console.error(err.message);
      setErr(err.message || String(err));
    } finally {
      setLoading(false);
    }
  }

  return { blogs, loading, err, getBlogs };
}