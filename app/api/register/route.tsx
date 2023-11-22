import { NextResponse } from 'next/server';
// Import necessary modules and types
import bcrypt from "bcrypt";
import { PrismaClient } from "prisma/prisma-client";
import { NextApiRequest, NextApiResponse } from "next";

// Create an instance of PrismaClient
const prisma = new PrismaClient();

// Define the type for the handler


export async  function POST(req: Request,res: NextApiResponse){
  const body = await req.json();
     const { email, password } = body;
     console.log(body);


       if (!email || !password) {
        return new NextResponse("Missing email or password", {status:400})}

              const exist = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      if (exist) {
        return new NextResponse("user already exists", {status:400});
      }

       const hashedPassword = await bcrypt.hash(password, 10);

      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
        },
      });

      return NextResponse.json(user)

}



// // Define the handler function
// const handler = async (req, res) => {
//   const body =await req.json()
//    const { email, password } = req.body;
//   if (req.method === "POST") {
//     try {
     

//       if (!email || !password) {
//         return res.status(400).json({ error: "Missing email or password" });
//       }

//       const exist = await prisma.user.findUnique({
//         where: {
//           email: email,
//         },
//       });

//       if (exist) {
//         return res.status(400).json({ error: "User already exists" });
//       }

//       const hashedPassword = await bcrypt.hash(password, 10);

//       const user = await prisma.user.create({
//         data: {
//           email,
//           password: hashedPassword,
//         },
//       });

//       return res.status(200).json(user);
//     } catch (error) {
//       console.error("Error during registration:", error);
//       return res.status(500).json({ error: "Internal Server Error" });
//     }
//   } else {
//     return res.status(405).json({ error: "Method Not Allowed" });
//   }

  
// };

// Export the handler
