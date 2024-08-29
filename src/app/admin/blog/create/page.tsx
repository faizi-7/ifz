"use client";
import { useState } from "react";
import styles from "./adminCreate.module.css";
import { useCreateBlog } from "@/lib/hooks/useCreateBlog";
import Loader from "@/app/components/Loader/Loader";
import UploadButton from "@/lib/utils";
import MarkdownEditor from "@/app/components/MarkdownEditor/MarkdownEditor";

export default function createBlog() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const { res, createBlog } = useCreateBlog();
  async function postHandler() {
    await createBlog(title, desc, thumbnail);
    setTitle("");
    setDesc("");
    setThumbnail("")
  }

  return (
    <div>
      <div className={styles.heading}>Create A Blog</div>
      <div className={styles.inputContainer}>
        <input
          className={styles.inputBox}
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* <textarea
          className={styles.inputBox}
          placeholder="Enter Blog Content in Markdown..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          rows={10}
        /> */}
        <MarkdownEditor content={desc} setContent={setDesc}/>
        <UploadButton setThumbnail={setThumbnail}/>
        <button onClick={postHandler} className={styles.btn2}>Post Blog</button>
        {res.loading ? <Loader/> : <></>}
        <div>{res.message}</div>
      </div>
    </div>
  );
}
