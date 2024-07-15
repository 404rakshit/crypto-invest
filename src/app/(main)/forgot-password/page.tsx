import type { Metadata } from "next";
import { getSession } from "@/util/useSession";
import { redirect } from "next/navigation";
import ResetForm from "./resetForm";
import { useSearchParams } from 'next/navigation'
import prisma from "@/util/prismaClient";
import { verifyToken } from "@/util/jwtutil";
import TokenForm from "./tokenForm";

export const metadata: Metadata = {
    metadataBase: new URL("https://crypto-invest-eight.vercel.app/"),
    title: "Forgot Password | CryptoInvestUSA",
    description: "reset form for crypto invest usa",
    openGraph: {
        images: "/home.png",
        title: "Forgot Password | CryptoInvestUSA",
        description: "Login form for crypto invest usa",
        url: "https://cryptoinvestusa.com",
        type: "website",
    },
};

export default async function Login({
    params,
    searchParams,
}: {
    params: { slug: string }
    searchParams: { [key: string]: string | undefined }
}) {

    const session = await getSession()

    if (session.isLoggedin) redirect("/verify")

    const token = searchParams?.token
    // return notFound()

    if (!!token) {

        const dbToken = await prisma.token.findUnique({ where: { token } })

        if (!dbToken?.token) redirect("/token-not-found")

        const payload = await verifyToken(dbToken?.token)

        if (payload.error) redirect("/verification-error")

        return (
            <div className="w-full place-items-start overflow-hidden">
                <div className="flex items-start justify-center py-32 px-5 max-w-3xl mx-auto w-full min-h-[90vh]">
                    <div className="mx-auto grid w-[450px] gap-6">
                        <div className="grid gap-2 text-center">
                            <h1 className="text-3xl font-bold">Reset Password</h1>
                            <p className="text-balance text-muted-foreground">
                                Enter your password below to reset your password
                            </p>
                        </div>
                        <TokenForm payload={payload.payload} />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full place-items-start overflow-hidden">
            <div className="flex items-start justify-center py-32 px-5 max-w-3xl mx-auto w-full min-h-[90vh]">
                <div className="mx-auto grid w-[450px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Forgot Password</h1>
                        <p className="text-balance text-muted-foreground">
                            Enter your email below to reset your password
                        </p>
                    </div>
                    <ResetForm />
                </div>
            </div>
        </div>
    );
}
