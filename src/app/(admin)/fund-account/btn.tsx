'use client'

import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"
import { useState } from "react"

export default function BTN() {
    const [copy, setCopy] = useState(false)

    return (<Button className={`${copy && "bg-lime-600 hover:bg-lime-700"}`} onClick={async () => {
        setCopy(true)
        navigator.clipboard.writeText("askhdjhasgdhjlquwvwhabdhabsdjsha ")
        await new Promise((res) => setTimeout(() => {
            setCopy(false)
            return res
        }, 1000))

    }}>{copy ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}</Button>)
}