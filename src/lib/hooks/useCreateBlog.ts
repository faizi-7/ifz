import { useState } from "react";

export function useCreateBlog() {
  const [res, setRes]= useState({
    loading : false,
    message : "",
    error : false
  })
  async function createBlog(title : string, desc : string, thumbnail: string) {

    setRes({
      loading: true,
      message: "",
      error : false
    });
    try {
      const data = await fetch("/api/admin/blog", {
        method: "POST",
        body: JSON.stringify({ title, description: desc, thumbnail }),
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
  return {res, createBlog}

}