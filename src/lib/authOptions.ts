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
    async jwt({ token, user }) {
      if (user?.name) {
        token.name = encodeURIComponent(user.name);
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.name) {
        session.user.name = decodeURIComponent(token.name as string);
      }
      return session;
    },
  },
  cookies: {
    pkceCodeVerifier: {
      name: 'next-auth.pkce.code_verifier',
      options: {
        httpOnly: true,
        sameSite: 'none',
        path: '/',
        secure: true,
      },
    },
    state: {
      name: 'next-auth.state',
      options: {
        httpOnly: true,
        sameSite: 'none',
        path: '/',
        secure: true,
      },
    },
  },
};