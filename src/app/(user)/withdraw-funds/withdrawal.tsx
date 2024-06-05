"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, QrCode } from "lucide-react";
import { fundAccount } from "@/actions/fundAccount";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function WithdrawForm({ username, totalAmount }: { username: string; totalAmount: number }) {
    const [isPending, setPending] = useState(false);

    function OnError(errData: any) {
        toast("Error Occured", {
            description: String(errData),
        });
    }

    function OnSuccess(resData: any) {
        toast("Request Sumbittion", {
            description: "Withdrawal request submitted.",
        });
    }

    const alrt = (field: string) => {
        toast(`Something wrong with ${field}`, {
            description: `Something wrong with ${field}`,
        });
        setPending(false);
    };

    function amountErr() {
        toast.error("Withdrawal Amount Exceeded", {
            description: `Your current amount balance is only $${totalAmount}, which is less than your withdrawal amount.`
        })
        setPending(false)
    }

    const handleForm = async (e: FormEvent<HTMLFormElement>) => {
        setPending(true);

        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const { amount, transactionId, description, select } = {
            amount: +(data.get("amount") || 0),
            transactionId: data.get("tranId")?.toString(),
            description: data.get("desc")?.toString(),
            select: data.get("select")?.toString(),
        };

        if (!amount) return alrt("Amount");
        if (!transactionId) return alrt("Transcation ID");

        if (amount > totalAmount) return amountErr()

        const res = await fetch(`/api/fundAccount`, {
            method: "POST",
            body: JSON.stringify({
                amount,
                currencytype: select,
                description: description || null,
                transactionId,
                username,
                fundType: "withdraw"
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
        <Card>
            <CardHeader>
                <CardTitle>Withdrawal Form</CardTitle>
                <CardDescription>
                    Depending on your Location, Bank Withdrawal can take upto 5-7 bussiness days to confirm.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <form
                    onSubmit={handleForm}
                    className="grid gap-4 w-full"
                >
                    <div className="space-y-1">
                        <Label htmlFor="username">Username <span className="text-red-500">*</span></Label>
                        <Input name="username" id="username" disabled defaultValue={username} placeholder="peduatre" />
                    </div>
                    <div className="border border-red-800/30 rounded-md p-3 shadow-md flex gap-2 items-start">
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <p className="text-sm">Your current account balance for now is <span className="font-bold">${totalAmount}</span>. Warning you can&apos;t exceed the withdrawal amount.</p>
                    </div>
                    <section className="grid md:grid-cols-2 md:gap-2 gap-1">
                        <div className="space-y-1">
                            <Label htmlFor="amount">Withdrawal Amount <span className="text-red-500">*</span></Label>
                            <Input name="amount" type="number" id="amount" placeholder="$500" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="sender">Transaction Hash ID <span className="text-red-500">*</span></Label>
                            <Input name="tranId" id="tranId" placeholder="Enter transaction Hash ID" />
                        </div>
                    </section>
                    <Select defaultValue="btc" name="select">
                        <SelectTrigger>
                            <SelectValue placeholder="Select Withdrawal Methods" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="btc">Bitcoin</SelectItem>
                            <SelectItem value="usdt">USDT</SelectItem>
                        </SelectContent>
                    </Select>
                    <div className="space-y-1">
                        <Label htmlFor="sender">Description</Label>
                        <Textarea name="desc" id="des" placeholder="Write description..." />
                    </div>

                    <Button type="submit" className="w-fit" disabled={isPending}>
                        {isPending ? "Sending Request..." : "Request Withdrawal"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}