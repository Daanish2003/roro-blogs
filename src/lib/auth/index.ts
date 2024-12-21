
import db from "@/db";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { anonymous } from "better-auth/plugins"
 
export const auth = betterAuth({
    appName: "RoRo's Blogs",
    database: prismaAdapter(db, {
       provider: "postgresql",
    }),
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            redirectURI: process.env.BETTER_AUTH_URL + "/api/auth/callback/google",
        },
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
            redirectURI: process.env.BETTER_AUTH_URL + "/api/auth/callback/github",
        }
    },
    plugins: [
        anonymous({
            emailDomainName: "example.com"
        })
    ]
})


