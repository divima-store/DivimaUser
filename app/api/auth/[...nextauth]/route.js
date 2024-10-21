import NextAuth from "next-auth";
import options from "@/app/_lib/auth"; // Ensure the path is correct

const handler = NextAuth(options);


export { handler as GET, handler as POST };
