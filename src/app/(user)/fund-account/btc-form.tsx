"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { BTN, QrBTN } from "./btn";

export default function BTCForm({ username }: { username: string }) {
    const [isPending, setPending] = useState(false);
    const router = useRouter();

    function OnError(errData: any) {
        toast("Error Occured", {
            description: String(errData),
        });
    }

    function OnSuccess(resData: any) {
        toast("Contact Form Sumbittion", {
            description: String(resData),
            onAutoClose: () => {
               router.refresh()
            }
        })
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
        const { amount, walletAddress, transactionId, description } = {
            amount: +(data.get("amount") || 0),
            walletAddress: data.get("senderAdd")?.toString(),
            transactionId: data.get("tranId")?.toString(),
            description: data.get("desc")?.toString(),
        };

        if (!amount) return alrt("Amount");
        if (!walletAddress) return alrt("Sender Address");
        if (!transactionId) return alrt("Transcation ID");

        const res = await fetch(`/api/fundAccount`, {
            method: "POST",
            body: JSON.stringify({
                amount,
                currencytype: "btc",
                description: description || null,
                walletAddress,
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
                    <QrBTN />
                </span>
            </div>
            <div className="space-y-1">
                <Label htmlFor="senderAdd">Senders Wallet Address: <span className="text-red-500">*</span></Label>
                <Input name="senderAdd" id="sender" placeholder="Enter your wallet address" />
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
