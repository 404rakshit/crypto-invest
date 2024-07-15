"use client";

import { resetPassword } from "@/actions/resetPassword";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { FormEvent, Suspense, useState } from "react";
import { toast } from "sonner";
import { Modal } from "../contact/contact-form";
import { redirect, useRouter } from "next/navigation";

export default function TokenForm({ payload }: { payload: any }) {
    const [isPending, setPending] = useState(false);
    const [open, setOpen] = useState(false);

    const router = useRouter()

    function OnSuccess() {
        // login(newData.post);
        router.push("/password-reset-successful")
    }

    function OnError(errData: any) {
        toast("Error Occured", {
            description: String(errData),
        });
    }

    const alrt = (field: string, message: string) => {
        toast(`Something wrong with ${field}`, {
            description: message,
        });
        setPending(false);
    };

    const handleForm = async (e: FormEvent<HTMLFormElement>) => {
        setPending(true);

        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const { pass, newPass } = {
            pass: data.get("pass")?.toString(),
            newPass: data.get("new-pass")?.toString(),
        };

        if (pass !== newPass) return alrt("password", "Password doesn't match");

        const res = await resetPassword({ email: payload?.email, password: pass! })

        setPending(false);

        if (res) return OnSuccess();
        return OnError(JSON.stringify("Something went wrong!"));
    };

    return (
        <>
            <form onSubmit={handleForm} className="grid gap-4">
                {/* <p>{JSON.stringify(payload)}</p> */}
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        value={payload.email}
                        disabled
                        required
                    />
                    <Label htmlFor="email">Password</Label>
                    <Input
                        type="text"
                        name="pass"
                        placeholder="*************"
                        required
                    />
                    <Label htmlFor="email">New Password</Label>
                    <Input
                        type="text"
                        name="new-pass"
                        placeholder="*************"
                        required
                    />
                </div>
                <Button disabled={isPending} type="submit" className="w-full">
                    {isPending ? "Reseting..." : "Reset Password"}
                </Button>
            </form>
            <Suspense fallback={<></>}>
                <Modal open={open} setOpen={setOpen} />
            </Suspense>
        </>
    );
}
