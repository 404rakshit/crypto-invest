"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { QrCode } from "lucide-react";
import BTN from "./btn";

export default function UTDCForm({ username }: { username: string }) {
    const [isPending, setPending] = useState(false);

    function OnError(errData: any) {
        toast("Error Occured", {
            description: String(errData),
        });
    }

    function OnSuccess(resData: any) {
        toast("Contact Form Sumbittion", {
            description: String(resData),
        });
    }

    const alrt = (field: string) => {
        toast(`Something wrong with ${field}`, {
            description: `Something wrong with ${field}`,
        });
        setPending(false);
    };

    const handleForm = async (e: FormEvent<HTMLFormElement>) => {
        setPending(true);

        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const { amount, transactionId, description } = {
            amount: +(data.get("amount") || 0),
            transactionId: data.get("tranId")?.toString(),
            description: data.get("desc")?.toString(),
        };

        if (!amount) return alrt("Amount");
        if (!transactionId) return alrt("Transcation ID");

        const res = await fetch(`/api/fundAccount`, {
            method: "POST",
            body: JSON.stringify({
                amount,
                currencytype: "usdt",
                description: description || null,
                transactionId,
                username,
                fundType: "fund"
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });

        const resData = await res.json();

        setPending(false);

        if (!resData.user) return OnError(String(resData.message));
        return OnSuccess(String(resData.message))
    };

    return (
        <form
            onSubmit={handleForm}
            className="grid gap-4 w-full"
        >
            <section className="grid md:grid-cols-2 md:gap-2 gap-1">
                <div className="space-y-1">
                    <Label htmlFor="username">Username <span className="text-red-500">*</span></Label>
                    <Input name="username" id="username" disabled defaultValue={username} placeholder="peduatre" />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="amount">Amount <span className="text-red-500">*</span></Label>
                    <Input name="amount" type="number" id="amount" placeholder="$500" />
                </div>
            </section>
            <div className="space-y-1">
                <Label htmlFor="pay">Send Payment To:<span className="text-red-500">*</span></Label>
                <span className="flex gap-1">
                    <Input value={"1mxeP1zTpyrA5wG7jrDhVDXM64Hf1KW1x"} onChange={() => null} id="pay" />
                    <BTN />
                    <Button><QrCode className="w-4 h-4" /></Button>
                </span>
            </div>
            <div className="space-y-1">
                <Label htmlFor="sender">Transaction Hash ID <span className="text-red-500">*</span></Label>
                <Input name="tranId" id="tranId" placeholder="Enter transaction Hash ID" />
            </div>
            <div className="space-y-1">
                <Label htmlFor="sender">Description</Label>
                <Textarea name="desc" id="des" placeholder="Write description..." />
            </div>

            <Button type="submit" className="w-fit" disabled={isPending}>
                {isPending ? "Sending Funds..." : "Fund Now"}
            </Button>
        </form>
    );
}
