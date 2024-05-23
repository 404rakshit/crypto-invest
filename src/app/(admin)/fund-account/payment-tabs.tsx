'use client'

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
import { Check, Copy, QrCode } from "lucide-react"
import { useState } from "react"

export default function PaymentTabs() {
    const [copy, setCopy] = useState(false)

    function BTN() {
        return (<Button className={`${copy && "bg-lime-600 hover:bg-lime-700" }`} onClick={async () => {
            setCopy(true)
            navigator.clipboard.writeText("askhdjhasgdhjlquwvwhabdhabsdjsha ")
            await new Promise((res) => setTimeout(() => {
                setCopy(false)
                return res
            }, 1000))
    
        }}>{copy ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}</Button>)
    }

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
                        <section className="grid md:grid-cols-2 md:gap-2 gap-1">
                            <div className="space-y-1">
                                <Label htmlFor="username">Username <span className="text-red-500">*</span></Label>
                                <Input id="username" placeholder="peduatre" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="amount">Amount <span className="text-red-500">*</span></Label>
                                <Input type="number" id="amount" placeholder="0.325 BTC" />
                            </div>
                        </section>
                        <div className="space-y-1">
                            <Label htmlFor="pay">Send Payment To:<span className="text-red-500">*</span></Label>
                            <span className="flex gap-1">
                                <Input value={"askhdjhasgdhjlquwvwhabdhabsdjsha"} id="pay" />
                                <BTN />
                                <Button><QrCode className="w-4 h-4" /></Button>
                            </span>
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="sender">Senders Wallet Address: <span className="text-red-500">*</span></Label>
                            <Input id="sender" placeholder="Enter your wallet address" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="sender">Transaction Hash ID <span className="text-red-500">*</span></Label>
                            <Input id="sender" placeholder="Enter transaction Hash ID" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="sender">Description</Label>
                            <Textarea id="sender" placeholder="Write description..." />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Fund Now</Button>
                    </CardFooter>
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
                        <section className="grid md:grid-cols-2 md:gap-2 gap-1">
                            <div className="space-y-1">
                                <Label htmlFor="username">Username <span className="text-red-500">*</span></Label>
                                <Input id="username" placeholder="peduatre" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="amount">Amount <span className="text-red-500">*</span></Label>
                                <Input type="number" id="amount" placeholder="$500" />
                            </div>
                        </section>
                        <div className="space-y-1">
                            <Label htmlFor="pay">Send Payment To:<span className="text-red-500">*</span></Label>
                            <span className="flex gap-1">
                                <Input value={"askhdjhasgdhjlquwvwhabdhabsdjsha"} id="pay" />
                                <BTN />
                                <Button><QrCode className="w-4 h-4" /></Button>
                            </span>
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="sender">Transaction Hash ID <span className="text-red-500">*</span></Label>
                            <Input id="sender" placeholder="Enter transaction Hash ID" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="sender">Description</Label>
                            <Textarea id="sender" placeholder="Write description..." />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Fund Now</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}