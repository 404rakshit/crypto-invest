import { getSession } from "@/util/useSession";
import FundsTable from "./funds-table";
import { redirect } from "next/navigation";
import { admin } from "@/lib/jotai";
import prisma from "@/util/prismaClient";

export default async function FundAccount() {

    const session = await getSession()
    if (session.email == admin) redirect("/admin")
    if (!session.isLoggedin) redirect("/login")
    if (!session.verified) redirect("/verify")

    const data = await prisma.user.findUnique({
        where: {
            username: session.username
        },
        select: {
            trade: true
        }
    })

    return (
        <main className="flex flex-col flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 bg-muted/40 min-h-screen">
            <div className="flex flex-col gap-5 items-start justify-center p-5 max-w-7xl mx-auto w-full">
                <h1 className="text-3xl font-bold">Trade History</h1>
                <FundsTable userData={data?.trade ?? "[]"} />
            </div>
        </main>
    );
}
