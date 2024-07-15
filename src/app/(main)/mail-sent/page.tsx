import type { Metadata } from "next";
import { getSession } from "@/util/useSession";
import { redirect } from "next/navigation";
export const metadata: Metadata = {
    metadataBase: new URL("https://crypto-invest-eight.vercel.app/"),
    title: "Mail Sent | CryptoInvestUSA",
    description: "reset form for crypto invest usa",
};

export default async function ResetSuccessful() {

    const session = await getSession()

    if (session.isLoggedin) redirect("/verify")

    return (
        <div className="w-full place-items-start overflow-hidden">
            <div className="flex items-start justify-center py-32 px-5 max-w-3xl mx-auto w-full min-h-[90vh]">
                <div className="mx-auto grid w-[450px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Mail Sent Successfully</h1>
                        <p className="text-balance text-muted-foreground">
                            A verification token has been sent to your mail. Check your inbox and click the password reset button. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
