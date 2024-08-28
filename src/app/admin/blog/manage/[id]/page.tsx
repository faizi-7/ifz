"use client";
import styles from './updateBlog.module.css';
import { useEffect, useState } from "react";
import { useUpdateBlog } from "@/lib/hooks/useUpdateBlog";
import Loader from "@/app/components/Loader/Loader";
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import { UploadFile } from "@mui/icons-material";

export default function updateBlog({ params }: { params: { id: string } }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const { res, updateBlog } = useUpdateBlog();

  useEffect(() => {
    async function fetchBlog() {
      try {
        const res = await fetch(`/api/admin/blog/${params.id}`, { method: "GET" });
        const blog = await res.json();
        setTitle(blog.title);
        setDesc(blog.description);
        setThumbnail(blog.thumbnail || ""); // Set the existing thumbnail if available
      } catch (err: any) {
        console.log(err.message || err);
      }
    }
    fetchBlog();
  }, [params.id]);

  async function postHandler() {
    await updateBlog({ title, description: desc, thumbnail }, params.id);
  }

  return (
    <div>
      <div className={styles.heading}>Update A Blog</div>
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
        <button onClick={postHandler} className={styles.btn2}>Update Blog</button>
        {res.loading ? <Loader /> : <></>}
        <div>{res.message}</div>
      </div>
    </div>
  );
}
