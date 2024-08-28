import { useState } from "react";
interface Project {
  _id : string,
  title : string,
  description : string, 
  thumbnail : string,
  technology ?: string[],
  github ?: string, 
  livelink ?: string
}
export function useGetProjects() {
  const [projects, setProjects]= useState<Project[]>([])
  const [err, setErr]= useState("")
  async function getProjects() {
    try {
      const res= await fetch('/api/admin/project', { method : "GET" })
      if(res.ok) {
        const data= await res.json()
        setProjects(data);
      } else {
        setErr("Error Getting Projects")
      }
    } catch(err : any) {
      setErr(err.message || err)
    }
  }
  return {projects, err, getProjects}
}