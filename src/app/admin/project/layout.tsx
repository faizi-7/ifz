'use client'
import styles from './AdminBlog.module.css'
import { useRouter } from 'next/navigation';

export default function adminProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router= useRouter();
  return (
    <div className={styles.adminLayout}>
      <div className= {styles.sidebar}>
        <div onClick={() => router.back()} className= {styles.navigationBtn}>Go Back</div>
        <div onClick={() => router.push('/admin/project/create')} className= {styles.navigationBtn}>Create A Project</div>
        <div onClick={() => router.push('/admin/project/manage')} className= {styles.navigationBtn}>Manage Projects</div>
      </div>
      <div className= {styles.mainbar}>
        {children}
      </div>
    </div>
  )
}
