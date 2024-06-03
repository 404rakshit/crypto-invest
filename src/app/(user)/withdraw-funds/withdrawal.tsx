import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Textarea } from "@/components/ui/textarea"
import { getSession } from "@/util/useSession"

export default async function Withdrawal() {
    
    const session = await getSession()

    return (
        <Card>
            <CardHeader>
                <CardTitle>Withdrawal Form</CardTitle>
                <CardDescription>
                    Depending on your Location, Bank Withdrawal can take upto 5-7 bussiness days to confirm.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="space-y-1">
                    <Label htmlFor="username">Username <span className="text-red-500">*</span></Label>
                    <Input id="username" placeholder="peduatre" disabled defaultValue={session.username} />
                </div>
                <section className="grid md:grid-cols-2 md:gap-2 gap-1">
                    <div className="space-y-1">
                        <Label htmlFor="amount">Withdrawal Amount <span className="text-red-500">*</span></Label>
                        <Input type="number" id="amount" placeholder="0.325 BTC" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="code">Withdrawal Code <span className="text-red-500">*</span></Label>
                        <Input type="number" id="code" placeholder="4376" />
                    </div>
                </section>
                <div className="space-y-1">
                    <Label htmlFor="pay">Withdrawal Type: <span className="text-red-500">*</span></Label>
                    <Select defaultValue="bitcoin">
                        <SelectTrigger>
                            <SelectValue placeholder="Select Withdrawal Methods" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="bitcoin">Bitcoin</SelectItem>
                            <SelectItem value="usdt">USDT</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-1">
                    <Label htmlFor="sender">Description</Label>
                    <Textarea id="sender" placeholder="Write description..." />
                </div>
            </CardContent>
            <CardFooter>
                <Button>Request Withdrawal</Button>
            </CardFooter>
        </Card>
    )
}