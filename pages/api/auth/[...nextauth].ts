import NextAuth, { Session, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../config/db";

export const authOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID || "",
			clientSecret: process.env.GOOGLE_SECRET || "",
		}),
	],
	callbacks: {
		async session({ session, user }: { session: Session; user: User }) {
			session.user.id = user.id;
			return session;
		},
	},
};

export default NextAuth(authOptions);
