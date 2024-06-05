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
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { getSession } from "@/util/useSession"
import { Check, Copy, QrCode } from "lucide-react"
import { useState } from "react"
import { BTN } from "./btn"
import BTCForm from "./btc-form"
import UTDCForm from "./utdc.form"

export default async function PaymentTabs() {

    const session = await getSession()

    return (
        <Tabs defaultValue="bitcoin" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="bitcoin">Bitcoin</TabsTrigger>
                <TabsTrigger value="usdt">USDT</TabsTrigger>
            </TabsList>
            <TabsContent value="bitcoin">
                <Card>
                    <CardHeader>
                        <CardTitle>Pay With Bitcoin</CardTitle>
                        <CardDescription>
                            Bitcoin funding is instant.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <BTCForm username={session.username || ""} />
                    </CardContent>
                    {/* <CardFooter>
                        <Button>Fund Now</Button>
                    </CardFooter> */}
                </Card>
            </TabsContent>
            <TabsContent value="usdt">
                <Card>
                    <CardHeader>
                        <CardTitle>Pay With USDT</CardTitle>
                        <CardDescription>
                            USDT funding is a bit time taking.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <UTDCForm username={session.username || ""} />
                    </CardContent>
                    {/* <CardFooter>
                        <Button>Fund Now</Button>
                    </CardFooter> */}
                </Card>
            </TabsContent>
        </Tabs>
    )
}