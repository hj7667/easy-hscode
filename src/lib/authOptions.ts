import { saveUserToFirestore } from "@/lib/firebaseAdmin";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        await saveUserToFirestore(user);
      } catch (e) {
        console.error('유저 저장 실패:', e);
      }
      return true;
    },
  },
};