import { Post } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const posts: Post[] = await prisma.post.findMany();
  return NextResponse.json(posts);
}
