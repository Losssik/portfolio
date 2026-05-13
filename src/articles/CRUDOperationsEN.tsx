import CodeBlock from "../components/CodeBlock/CodeBlock";
const CRUDOperationsEN = () => {
  return (
    <div className="article">
      <h1>Next.js CRUD with Mongoose</h1>

      <p>
        In this article we will build a simple CRUD API using Next.js App Router
        and MongoDB with Mongoose.
      </p>

      <h2>Folder structure</h2>
      <CodeBlock
        code={`/app
  /api
    /posts
      route.ts
    /posts/[id]
      route.ts
/lib
  mongodb.ts
  models/Post.ts`}
      />

      <h3>Connecting to MongoDB</h3>
      <CodeBlock
        code={`// lib/mongodb.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI");
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
`}
      />

      <h3>Creating a Model</h3>
      <CodeBlock
        code={`// lib/models/Post.ts
import mongoose, { Schema, models, model } from "mongoose";

const PostSchema = new Schema(
  {
    title: String,
    content: String,
  },
  { timestamps: true }
);

export const Post =
  models.Post || model("Post", PostSchema);
`}
      />

      <h3>Create & Get All (GET, POST)</h3>
      <CodeBlock
        code={`// app/api/posts/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Post } from "@/lib/models/Post";

export async function GET() {
  await connectDB();
  const posts = await Post.find();
  return NextResponse.json(posts);
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();

  const post = await Post.create(body);

  return NextResponse.json(post, { status: 201 });
}
`}
      />

      <h3>Get One, Update, Delete</h3>
      <CodeBlock
        code={`// app/api/posts/[id]/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Post } from "@/lib/models/Post";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();
  const post = await Post.findById(params.id);
  return NextResponse.json(post);
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();
  const body = await req.json();

  const updated = await Post.findByIdAndUpdate(
    params.id,
    body,
    { new: true }
  );

  return NextResponse.json(updated);
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();

  await Post.findByIdAndDelete(params.id);

  return NextResponse.json({ message: "Deleted" });
}
`}
      />

      <h3>Example Fetch (Frontend)</h3>
      <CodeBlock
        code={`// Create post
await fetch("/api/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "Hello",
    content: "World",
  }),
});

// Get posts
const res = await fetch("/api/posts");
const data = await res.json();
`}
      />

      <h3>Environment Variable</h3>
      <CodeBlock
        code={`// .env.local
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname`}
      />

      <h3>Summary</h3>
      <p>
        You now have a full CRUD API using Next.js App Router and Mongoose. You
        can create, read, update, and delete documents from MongoDB.
      </p>
    </div>
  );
};

export default CRUDOperationsEN;
