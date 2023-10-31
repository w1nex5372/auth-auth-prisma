// pages/api/auth/[...nextauth].ts
import { PrismaClient } from "prisma/prisma-client";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { comparePasswords } from "@/utils/passwordUtils";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
const prisma = new PrismaClient();
const authOptions = {
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Authorization attempt with:", credentials.email);

        try {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          });

          if (!user) {
            console.log("User not found for email:", credentials.email);
            return Promise.resolve(null);
          }

          const passwordMatch = await comparePasswords(
            credentials.password,
            user.password
          );
          console.log("Password match:", passwordMatch);

          if (passwordMatch) {
            console.log("User authenticated:", user.email);
            return Promise.resolve(user);
          } else {
            console.log("Password does not match for user:", user.email);
            return Promise.resolve(null);
          }
        } catch (error) {
          console.error("Error during authorization:", error);
          return Promise.resolve(null);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    jwt: true, // Enable JWT sessions
    // You can specify the secret here:
    secret: process.env.NEXTAUTH_SECRET,
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
