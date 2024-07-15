"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";

export default function ResetForm() {
  const [isPending, setPending] = useState(false);

  const router = useRouter()

  function OnSuccess( ) {
    // login(newData.post);
    router.push("/mail-sent")
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
    const { email } = {
      email: data.get("email")?.toString(),
    };

    if (!email) return alrt("email", "Email is required");
    if (email.split("@").length !== 2) return alrt("email", "Invalid Email");

    const res = await fetch(`/api/reset-password`, {
      method: "POST",
      body: JSON.stringify({
        email
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const resData = await res.json();

    setPending(false);

    console.log(resData)

    if (resData?.res?.data?.id) return OnSuccess();
    return OnError(JSON.stringify(resData?.message));
  };

  return (
    <form onSubmit={handleForm} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="email">Username or Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="m@example.com"
          required
        />
      </div>
      <Button disabled={isPending} type="submit" className="w-full">
        {isPending ? "Loggin..." : "Login"}
      </Button>
    </form>
  );
}
