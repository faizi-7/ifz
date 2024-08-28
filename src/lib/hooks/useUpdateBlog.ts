import { useState } from "react";
interface Body {
  title ?: string,
  description ?: string
}
export function useUpdateBlog() {
  const [res, setRes]= useState({
    loading : false,
    message : "",
    error : false
  })
  async function updateBlog(body: Body, id: string ) {

    setRes({
      loading: true,
      message: "",
      error : false
    });
    try {
      const data = await fetch(`/api/admin/blog/${id}`, {
        method: "PUT",
        body: JSON.stringify(body),
      });
      if (data.ok) {
        const val = await data.json();
        setRes({
          loading: false,
          message: val._id + " Updated Successfully!",
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
  return {res, updateBlog}

}