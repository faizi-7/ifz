import { connectDb } from "@/lib/mongodb";
import { Project } from "@/models/Project"

export async function GET(request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDb()
    const data= await Project.findById(params.id)
    return Response.json(data)
  } catch (err: any) {
    return new Response(err.message, { status: 400 })
  }
}


export async function DELETE(request:Request,
  { params } : { params : { id : string }}
) {
  try {
    await connectDb()
    const id= params.id
    await Project.findOneAndDelete({_id : id});
    return Response.json("Project Deleted Successfully!")
  } catch (err: any) {
    return new Response(err.message, { status: 400 })
  }
}