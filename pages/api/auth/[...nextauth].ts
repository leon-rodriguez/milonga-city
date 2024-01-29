import NextAuth from 'next-auth';
// import GithubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google';

const handler = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // ...add more providers here
  ],
};

export default NextAuth(handler);
