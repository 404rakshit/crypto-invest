'use client'

import { Button } from "@/components/ui/button"
import { Check, Copy, QrCode } from "lucide-react"
import { useState } from "react"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export function BTN() {
    const [copy, setCopy] = useState(false)

    return (<Button type="button" className={`${copy && "bg-lime-600 hover:bg-lime-700"}`} onClick={async () => {
        setCopy(true)
        navigator.clipboard.writeText("1mxeP1zTpyrA5wG7jrDhVDXM64Hf1KW1x")
        await new Promise((res) => setTimeout(() => {
            setCopy(false)
            return res
        }, 1000))

    }}>{copy ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}</Button>)
}

export function QrBTN() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button type="button"><QrCode className="w-4 h-4" /></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <div className="p-4">
                    <Image src={"/qrcode.jpg"} alt={"crypto invest usa qrcode"} width={400} height={400} className="rounded-md" />
                </div>
            </DialogContent>
        </Dialog>
    )
}
