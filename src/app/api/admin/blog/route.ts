import { connectDb } from "@/lib/mongodb";
import { Blog } from "@/models/Blog";
export async function POST(request: Request) {
  try {
    await connectDb()
    const body= await request.json();
    const data= new Blog(body)
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
    const blogs = await Blog.find();
    return Response.json(blogs);
  } catch (err: any) {
    console.error("Error in GET /api/admin/blog:", err);
    return new Response(err.message, { status: 500 });
  }
}