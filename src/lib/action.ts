import { toast } from "react-toastify";

export async function deleteBlog(id : string) {
  try {

    const res= await fetch(`/api/admin/blog/${id}`, { method : "DELETE" });
    if(res.ok) {
      const message= await res.json()
      toast.success(message)
      return;
    } else {
      toast.error("Unable to Delete")
      return;
    }
  } catch(err : any) {
    toast.error(err.message || err)
    return;
  }
}
export async function deleteProject(id : string) {
  try {

    const res= await fetch(`/api/admin/project/${id}`, { method : "DELETE" });
    if(res.ok) {
      const message= await res.json()
      toast.success(message)
      return;
    } else {
      toast.error("Unable to Delete")
      return;
    }
  } catch(err : any) {
    toast.error(err.message || err)
    return;
  }
}