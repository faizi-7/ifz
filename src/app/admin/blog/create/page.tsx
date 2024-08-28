"use client";
import { useState } from "react";
import styles from "./adminCreate.module.css";
import { useCreateBlog } from "@/lib/hooks/useCreateBlog";
import { CldUploadWidget,  CloudinaryUploadWidgetInfo,  CloudinaryUploadWidgetResults } from "next-cloudinary";
import Loader from "@/app/components/Loader/Loader";
import { UploadFile } from "@mui/icons-material";

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
        <textarea
          className={styles.inputBox}
          placeholder="Enter Blog Content in Markdown..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          rows={10}
        />
        <CldUploadWidget
          uploadPreset="ifaizprivate07"
          options={{ sources: ["local", "url"] }}
          onSuccess={(result) => {
            if (typeof result.info === "object" && result.info !== null) {
              const url = (result.info as CloudinaryUploadWidgetInfo).secure_url;
              console.log(url);
              if (url) {
                setThumbnail(url.toString());
              } else {
                console.error("Upload failed or no URL returned.");
              }
            } else {
              console.error("Unexpected result type:", typeof result.info);
            }
          }}
          onQueuesEnd={(result, { widget }) => {
            widget.close();
          }}
        >
          {({ open }) => (
            <button onClick={() => open()} className={styles.btn1}>
              Upload the Project Image <UploadFile />
            </button>
          )}
        </CldUploadWidget>
        <button onClick={postHandler} className={styles.btn2}>Post Blog</button>
        {res.loading ? <Loader/> : <></>}
        <div>{res.message}</div>
      </div>
    </div>
  );
}
