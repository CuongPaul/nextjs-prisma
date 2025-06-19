import { prisma } from "@/lib/prisma";

const userData = [
  {
    name: "Alice",
    email: "alice@prisma.io",
  },
  {
    name: "Bob",
    email: "bob@prisma.io",
  },
];

export async function main() {
  const creates = userData.map((user) => prisma.user.create({ data: user }));

  await prisma.$transaction(creates);
}

main();
