import styles from './AdminBlogCard.module.css';

interface AdminBlogCardProps {
  blog: {
    _id: string;
    title: string;
    createdAt: string;
    updatedAt: string;
  };
  onUpdate: () => void;
  onDelete: () => void;
}

export default function AdminBlogCard({ blog, onUpdate, onDelete }: AdminBlogCardProps) {
  const date1 = new Date(blog.createdAt);
  const date2 = new Date(blog.updatedAt);
  const createTime = date1.toLocaleDateString('en-IN');
  const updateTime = date2.toLocaleDateString('en-IN');

  return (
    <div className={styles.card}>
      <div className={styles.topContent}>
        <div className={styles.cardHeading}>{blog.title}</div>
        <div className={styles.cardDate}>Date Created: {createTime}</div>
        <div className={styles.cardDate}>Date Updated: {updateTime}</div>
      </div>
      <div className={styles.buttonGroup}>
        <button className= {styles.btn} onClick={onUpdate}>Update Blog</button>
        <button className= {styles.btn} onClick={onDelete}>Delete Blog</button>
      </div>
    </div>
  );
}
