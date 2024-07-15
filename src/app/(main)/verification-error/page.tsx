import type { Metadata } from "next";
import { getSession } from "@/util/useSession";
import { redirect } from "next/navigation";
import { useSearchParams } from 'next/navigation'
import prisma from "@/util/prismaClient";
import { verifyToken } from "@/util/jwtutil";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
    metadataBase: new URL("https://crypto-invest-eight.vercel.app/"),
    title: "Verification Error | CryptoInvestUSA",
    description: "reset form for crypto invest usa",
};

export default async function VerificationErr() {

    const session = await getSession()

    if (session.isLoggedin) redirect("/verify")

    return (
        <div className="w-full place-items-start overflow-hidden">
            <div className="flex items-start justify-center py-32 px-5 max-w-3xl mx-auto w-full min-h-[90vh]">
                <div className="mx-auto grid w-[450px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Token Verification Error</h1>
                        <p className="text-balance text-muted-foreground">
                            An error occurred while verifying your token. Please try again or contact support for assistance.
                        </p>
                        <Link href={"/forgot-password"}>
                            <Button>Try Again</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
