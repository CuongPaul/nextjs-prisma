import { User } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const users: User[] = await prisma.user.findMany();
  return NextResponse.json(users);
}
