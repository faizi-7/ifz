'use client'
import React from "react";
import styles from "./BlogCard.module.css";
import { useRouter } from "next/navigation";

interface BlogCardProps {
  thumbnail: string;
  title: string;
  creationDate: string;
  id: string;
}
function monthsAgo(dateString:string) {
  const date = new Date(dateString);
  const now = new Date();
  
  let months = (now.getFullYear() - date.getFullYear()) * 12;
  months -= date.getMonth();
  months += now.getMonth();
  
  return months < 0 ? 0 : months;
}

const BlogCard: React.FC<BlogCardProps> = ({
  thumbnail,
  title,
  creationDate,
  id
}) => {
  const router= useRouter()
  const date = new Date(creationDate);
  const monthAgo= monthsAgo(creationDate)
  const createdDate = date.toLocaleDateString("en-US");
  return (
    <div className={styles.card} onClick={() => router.push(`/blog/${id}`)}>
      <div className={styles.imageContainer}>
        <div className={styles.imageDate}>{createdDate}</div>
        <img src={thumbnail} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div>{`${monthAgo} months ago`}</div>
      </div>
    </div>
  );
};

export default BlogCard;
