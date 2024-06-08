import Link from "next/link";

import type { Metadata } from "next";
import { getSession } from "@/util/useSession";
import { notFound, redirect } from "next/navigation";
import ResetForm from "./loginForm";

export const metadata: Metadata = {
    metadataBase: new URL("https://crypto-invest-eight.vercel.app/"),
    title: "Reset Password | CryptoInvestUSA",
    description: "reset form for crypto invest usa",
    openGraph: {
        images: "/home.png",
        title: "Reset Password | CryptoInvestUSA",
        description: "Login form for crypto invest usa",
        url: "https://cryptoinvestusa.com",
        type: "website",
    },
};

export default async function Login() {

    const session = await getSession()

    if (session.isLoggedin) redirect("/verify")

    return notFound()

    return (
        <div className="w-full place-items-start overflow-hidden">
            <div className="flex items-center justify-center py-20 px-5 max-w-3xl mx-auto w-full min-h-[90vh]">
                <div className="mx-auto grid w-[450px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Forgot Password</h1>
                        <p className="text-balance text-muted-foreground">
                            Enter your email below to reset your password
                        </p>
                    </div>
                    <ResetForm />
                    {/* <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div> */}
                </div>
            </div>
        </div>
    );
}
