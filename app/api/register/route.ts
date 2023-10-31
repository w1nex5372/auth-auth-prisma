import bcrypt from "bcrypt";
import { PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient();
import { NextResponse } from "next/server";



export async function POST(request){
  const body = await request.json();
  const {email, password} = body;
  console.log(body);


  if (!email || !password){
    return new NextResponse("Missing email or passowrd", {status: 400})
  }

  const exist = await prisma.user.findUnique({
    where : {
      email: email
    }
  });

  if (exist){
    return new Response("User already exists", {status: 400})
    
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data : {
      email, 
      password: hashedPassword
    }
  })


  return NextResponse.json(user);
}