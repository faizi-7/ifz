'use client'
import styles from './AdminBlog.module.css'
import { useRouter } from 'next/navigation';

export default function adminBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router= useRouter();
  return (
    <div className={styles.adminLayout}>
      <div className= {styles.sidebar}>
        <div onClick={() => router.back()} className= {styles.navigationBtn}>Go Back</div>
        <div onClick={() => router.push('/admin/blog/create')} className= {styles.navigationBtn}>Create A Blog</div>
        <div onClick={() => router.push('/admin/blog/manage')} className= {styles.navigationBtn}>Manage Blogs</div>
      </div>
      <div className= {styles.mainbar}>
        {children}
      </div>
    </div>
  )
}
