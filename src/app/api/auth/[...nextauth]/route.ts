import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials?.email === "admin@example.com" &&
          credentials.password === "password"
        ) {
          return { id: "1", name: "Admin", email: credentials.email };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login", // Custom login page
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
