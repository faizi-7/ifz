"use client";
import { useState } from "react";
import styles from "./adminCreate.module.css";
import { useCreateProject } from "@/lib/hooks/useCreateProject";
import UploadButton from "@/lib/utils";
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
        <UploadButton setThumbnail={setThumbnail}/>
        <button onClick={postHandler}>Post Project</button>
        {res.loading ? <div>Loading...</div> : <></>}
        <div>{res.message}</div>
      </div>
    </div>
  );
}
