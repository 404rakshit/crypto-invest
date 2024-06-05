import Link from "next/link";
// import DocForm from "./documentForm";
import { CircleAlert, Terminal } from "lucide-react"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import PaymentTabs from "./withdrawal";
import { getSession } from "@/util/useSession";
import { redirect } from "next/navigation";
import { admin } from "@/lib/jotai";
import prisma from "@/util/prismaClient";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge";


export default async function FundAccount() {

    const session = await getSession()
    if (session.email == admin) redirect("/admin")
    if (!session.isLoggedin) redirect("/login")
    if (!session.verified) redirect("/verify")

    const data = await prisma.portfolio.findUnique({
        where: { username: session.username }, select: {
            total: true,
            user: {
                select: {
                    funds: {
                        where: {
                            fundType: 'withdraw'
                        }
                    }
                }
            }
        },
    })

    return (
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 bg-muted/40 min-h-screen">
            <div className="flex max-lg:flex-col items-start max-lg:items-center justify-start gap-2 py-10 px-5 max-w-7xl mx-auto w-full max-lg:min-h-screen relative">
                <div className="grid gap-6 max-w-xl xl:max-w-3xl">
                    <div className="grid gap-2">
                        <h1 className="text-3xl font-bold">Withdraw Funds</h1>
                        <Alert>
                            <CircleAlert className="h-4 w-4" />
                            <AlertTitle>Notice</AlertTitle>
                            <AlertDescription>
                                Withdrawals ore based on your Account types, your Account Type will determine the amount you con withdraw. Contact <span className="font-bold">contact@cryptoinvestusa.com</span> for o more detailed description. Ensure to provide your Withdrawal Code when contacting support. II you encounter any issue while withdrawing from your account, please contact <span className="font-bold">contact@cryptoinvestusa.com</span> for ossiastance. Your account will be credited once your payment is confirmed.
                            </AlertDescription>
                        </Alert>
                    </div>
                    <PaymentTabs username={session.username || ""} totalAmount={data?.total ?? 0} />
                </div>
                <div className="grid gap-3 sticky top-0 w-full max-w-xl">
                    <div className="grid gap-2">
                        <h2 className="text-2xl font-bold">Withdraw Requests</h2>
                    </div>
                    <Table className="border bg-white rounded-md overflow-hidden">
                        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Date</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Method</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data?.user.funds.map(({ amount, createdAt, status, currencytype }, i) => (
                                <TableRow key={i}>
                                    <TableCell className="font-medium">{(new Date(createdAt)).toLocaleDateString()}</TableCell>
                                    <TableCell><Badge>{status}</Badge></TableCell>
                                    <TableCell className="uppercase">{currencytype}</TableCell>
                                    <TableCell className="text-right">${amount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        {/* <TableFooter>
                            <TableRow>
                                <TableCell colSpan={3}>Total</TableCell>
                                <TableCell className="text-right">$2,500.00</TableCell>
                            </TableRow>
                        </TableFooter> */}
                    </Table>
                </div>
            </div>
        </main>
    );
}
