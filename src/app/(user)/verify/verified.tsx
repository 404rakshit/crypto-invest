import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { setVerified } from "@/util/useSession"
import { CircleAlert, CircleCheck } from 'lucide-react'
import Link from "next/link"
import { redirect } from "next/navigation"

export default function Verified() {
    async function setVerify() {
        'use server'
        await setVerified(true)
        redirect("/dashboard")
    }

    return (
        <form action={setVerify} className="grid gap-4">
            <Alert>
                {/* <CircleCheck className="h-4 w-4" /> */}
                <AlertTitle>Account Verified</AlertTitle>
                <div className="flex flex-col items-center gap-2">
                    <CircleCheck className="h-14 w-14 text-green-700" />
                    <AlertDescription>
                        Hurry! Your account has been verified successfully. Now you can invest with us and grow with us via funding your account.
                    </AlertDescription>
                </div>
            </Alert>
            <button type="submit" className="w-full bg-green-700 rounded-md py-2 px-3 text-white">Visit Dashboard</button>
        </form>
    )
}
