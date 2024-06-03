import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { setVerified } from "@/util/useSession"
import { CircleAlert } from 'lucide-react'
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
                <CircleAlert className="h-4 w-4" />
                <AlertTitle>Notice</AlertTitle>
                <AlertDescription>
                    Keep patience, your uploaded files are undergoing inspection. <span className="font-bold">Hold on a moment</span>. For more details, Ensure to provide your Funding Code when contacting support. If you encounter any issue while funding your account, please contact <span className="font-bold">contact@cryptoinvestusa.com</span> for assistance. Your account once your payment is confirmed.
                </AlertDescription>
            </Alert>
            <button type="submit" className="w-full bg-green-700 rounded-md py-2 px-3 text-white">Visit Dashboard</button>
        </form>
    )
}
