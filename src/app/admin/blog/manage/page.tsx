'use client'
import { useGetBlogs } from '@/lib/hooks/useGetBlogs';
import styles from './adminManage.module.css'
import { useEffect } from 'react';
import { deleteBlog } from '@/lib/action';
import { useRouter } from 'next/navigation';
import Loader from '@/app/components/Loader/Loader';
import AdminBlogCard from '@/app/components/AdminBlogCard/AdminBlogCard';

export default function AdminManageBlog() {
  const router = useRouter();
  const { blogs, err, loading, getBlogs } = useGetBlogs();

  useEffect(() => {
    async function temp() {
      await getBlogs();
    }
    temp();
  }, []);

  async function deleteHandler(id: string) {
    await deleteBlog(id);
    await getBlogs();
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Manage Blogs</div>
      <div className={styles.cardContainer}>
        {blogs.map((blog) => (
          <AdminBlogCard
            key={blog._id}
            blog={blog}
            onUpdate={() => router.push(`/admin/blog/manage/${blog._id}`)}
            onDelete={() => deleteHandler(blog._id)}
          />
        ))}
      </div>
    </div>
  );
}
