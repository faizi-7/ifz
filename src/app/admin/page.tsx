import Link from 'next/link';
import styles from './Admin.module.css'

export default function AdminPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to the Admin Dashboard</h1>
      <div className={styles.manage}>
        <div className={styles.manageX}><Link href='admin/blog' className='link'>Manage Blogs</Link></div>
        <div className={styles.manageY}><Link href='admin/project' className='link'>Manage Projects</Link></div>
      </div>
    </div>
  );
}
