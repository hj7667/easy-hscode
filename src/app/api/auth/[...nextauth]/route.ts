import { saveUserToFirestore } from "@/lib/firebaseAdmin";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
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
        // 저장 실패해도 로그인은 허용
      }
      return true;
    },
  },
});

export { handler as GET, handler as POST };