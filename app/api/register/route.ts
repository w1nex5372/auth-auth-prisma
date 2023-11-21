import bcrypt from "bcrypt";
import { PrismaClient } from "prisma/prisma-client";
import { NextApiResponse } from "next"; // Update this import
import { NextApiRequest } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ error: "Missing email or password" });
      }

      const exist = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      if (exist) {
        return res.status(400).json({ error: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
        },
      });

      return res.status(200).json(user);
    } catch (error) {
      console.error("Error during registration:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
