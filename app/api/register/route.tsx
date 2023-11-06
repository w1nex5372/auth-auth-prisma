import bcrypt from "bcrypt";
import { PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient();
import { NextResponse } from "next/server";
import { NextApiRequest } from "next";

export default async function handler(req: NextApiRequest) {
  if (req.method === "POST") {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return new NextResponse("Missing email or password", { status: 400 });
      }

      const exist = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      if (exist) {
        return new NextResponse("User already exists", { status: 400 });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
        },
      });

      return new NextResponse(JSON.stringify(user), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error during registration:", error);
      return new NextResponse("Internal Server Error", { status: 500 });
    }
  } else {
    return new NextResponse("Method Not Allowed", { status: 405 });
  }
}
