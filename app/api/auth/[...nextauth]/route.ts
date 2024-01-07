import NextAuth from "next-auth";
import { authOptions } from "../../../../libs/session";

const handler = NextAuth(authOptions);
export const GET = handler;

// Export the handler for the POST method
export const POST = handler;
