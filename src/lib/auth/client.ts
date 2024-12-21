import { createAuthClient } from "better-auth/react"
import { anonymousClient } from "better-auth/client/plugins"
import { toast } from "sonner"
import { SocialProvider } from "@/types/auth-types"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

 
export const authClient =  createAuthClient({
    baseURL: process.env.BETTER_AUTH_URL,
    plugins: [
        anonymousClient()
    ]

})

export const signIn  = async (provider: "anonymous" | SocialProvider, router: AppRouterInstance) => {
     try {
        if (provider === "anonymous") {
            await authClient.signIn.anonymous({},
                {
                    onSuccess: () => {
                        router.push('/')
                        toast("Login successfully")
                    },
                    onError: (ctx) => {
                        toast(ctx.error.message)
                    }
            })
        }

        if (provider === "github" || provider === "google") {
            const response = await authClient.signIn.social(
                {
                    provider: provider,
                    callbackURL: "/",
                    fetchOptions: {
                        onSuccess: () => {
                            toast("Login Successfully")
                        },
                        onError: (ctx) => {
                            toast(ctx.error.message)
                        }
                    }
                }
            )

            return response
        }
     } catch (error) {
       console.log(error)
     }
}