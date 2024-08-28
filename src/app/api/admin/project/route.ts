import { connectDb } from "@/lib/mongodb";
import { Blog } from "@/models/Blog";
import { Project } from "@/models/Project";

export async function POST(request: Request) {
  try {
    await connectDb()
    const body= await request.json();
    const data= new Project(body)
    await data.save()
    console.log(data)
    return Response.json(data)
  }
  catch(err:any) {
    return new Response(err.message, { status: 400 })
  }
}

export async function GET(request: Request) {
  try {
    await connectDb();
    const projects= await Project.find();
    return Response.json(projects);
  } catch(err:any) {
    return new Response(err.message, { status : 400 })
  }
}