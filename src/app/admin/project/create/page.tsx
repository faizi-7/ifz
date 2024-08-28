"use client";
import { useState } from "react";
import styles from "./adminCreate.module.css";
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import { useCreateProject } from "@/lib/hooks/useCreateProject";
import { UploadFile } from "@mui/icons-material";
interface Project {
  title : string,
  description : string, 
  thumbnail : string,
  technology ?: string[],
  github ?: string, 
  livelink ?: string
}
export default function createProject() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tech, setTech] = useState("");
  const [github, setGithub] = useState("");
  const [livelink, setLivelink] = useState("");
  const { res, createProject } = useCreateProject();
  const [thumbnail, setThumbnail] = useState('')

  async function postHandler() {
    let technology= []
    let project:Project= {
      title, 
      description : desc,
      thumbnail,
    }
    if (tech !== "") {
      technology = tech.split(",").map(val => val.trim());
      project.technology = technology;
    }
    
    if (github !== "") {
      project.github = github;
    }
    
    if (livelink !== "") {
      project.livelink = livelink;
    }
    

    await createProject(project)
    setTitle("");
    setDesc("");
    setThumbnail("");
    setTech("");
    setGithub("");
    setLivelink("");
  }

  return (
    <div>
      <div className={styles.heading}>Create A Project</div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Technologies used seperated by ,(commas)"
          value={tech}
          onChange={(e) => setTech(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Github Link"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Live Link"
          value={livelink}
          onChange={(e) => setLivelink(e.target.value)}
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
        <button onClick={postHandler}>Post Project</button>
        {res.loading ? <div>Loading...</div> : <></>}
        <div>{res.message}</div>
      </div>
    </div>
  );
}
