import { connectDb } from "@/lib/mongodb";
import { Blog } from "@/models/Blog"

export async function GET(request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDb();
    const data = await Blog.findById(params.id);

    if (!data) {
      return new Response("Blog not found", { status: 404 });
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    return new Response(err.message, { status: 400 });
  }
}
export async function PUT(request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDb()
    const body = await request.json();
    const id = params.id
    const updatedBlog = await Blog.findByIdAndUpdate(
      { _id: id },
      body,
      { new: true })
    console.log(updatedBlog)
    return Response.json(updatedBlog)
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
    await Blog.findOneAndDelete({_id : id});
    return Response.json("Blog Deleted Successfully!")
  } catch (err: any) {
    return new Response(err.message, { status: 400 })
  }
}