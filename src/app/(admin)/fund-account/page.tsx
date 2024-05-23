import Link from "next/link";
// import DocForm from "./documentForm";
import { CircleAlert, Terminal } from "lucide-react"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import PaymentTabs from "./payment-tabs";


export default function FundAccount() {
    return (
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 bg-muted/40 min-h-screen">
            <div className="flex items-start lg:items-center justify-center py-10 px-5 max-w-3xl mx-auto w-full max-lg:min-h-screen">
                <div className="grid gap-6">
                    <div className="grid gap-2">
                        <h1 className="text-3xl font-bold">Fund Your Account</h1>
                        <Alert>
                            <CircleAlert className="h-4 w-4" />
                            <AlertTitle>Notice</AlertTitle>
                            <AlertDescription>
                                Please Note that Minimum Fund Amount is $500. Contact EMIAL for more details. Ensure to provide your Funding Code when contacting support. If you encounter any issue while funding your account, please contact EMIAL for assistance. Your account once your payment is confirmed.
                            </AlertDescription>
                        </Alert>
                    </div>
                    <PaymentTabs />
                </div>
            </div>
        </main>
    );
}
