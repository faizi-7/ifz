import { useState } from "react";
interface Project {
  title : string,
  description : string, 
  thumbnail : string,
  technology ?: string[],
  github ?: string, 
  livelink ?: string
}
export function useCreateProject() {
  const [res, setRes]= useState({
    loading : false,
    message : "",
    error : false
  })
  async function createProject(project : Project) {

    setRes({
      loading: true,
      message: "",
      error : false
    });
    try {
      const data = await fetch("/api/admin/project", {
        method: "POST",
        body: JSON.stringify(project),
      });
      if (data.ok) {
        const val = await data.json();
        setRes({
          loading: false,
          message: val.title + " Created Successfully!",
          error: false,
        });
      } else {
        setRes({
          loading: false,
          message: "Error Fetching Data!",
          error: true,
        });
      }
    } catch (err: any) {
      setRes({
        loading: false,
        message: err.message || err,
        error: true,
      });
    }
  }
  return {res, createProject}

}