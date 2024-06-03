"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function DocForm() {
  const [isPending, setPending] = useState(false);

  const router = useRouter();

  function OnSuccess(newData: any) {
    router.push("/dashboard");
  }

  function OnError(errData: any) {
    toast("Error Occured", {
      description: String(errData),
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
    const { username, password } = {
      username: data.get("username")?.toString(),
      password: data.get("password")?.toString(),
    };

    if (!username) return alrt("username");
    if (!password) return alrt("password");

    const res = await fetch(`/api/login`, {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const resData = await res.json();

    setPending(false);

    if (resData.user) return OnSuccess(resData);
    return OnError(String(resData));
  };

  return (
    <form onSubmit={handleForm} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="email" className="flex flex-col gap-1">
          <span>Document Type</span>
          <span className="text-muted-foreground text-xs font-semibold">
            [E.g Drivers License, Passport etc]
          </span>
        </Label>

        <Select>
          <SelectTrigger className="">
            <SelectValue placeholder="Select Document Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="driver-license">
              Driver&apos;s License
            </SelectItem>
            <SelectItem value="passport">Passport</SelectItem>
            <SelectItem value="others">Others</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="file">Front View</Label>
        </div>
        <Input
          name="file"
          id="file"
          type="file"
          className="file:text-white file:bg-primary/70 file:rounded-sm file: file:mr-2"
          required
        />
      </div>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="file">Back View</Label>
        </div>
        <Input
          name="file"
          id="file"
          type="file"
          className="file:text-white file:bg-primary/70 file:rounded-sm file: file:mr-2"
          required
        />
      </div>
      <Button disabled={isPending} type="submit" className="w-full">
        {isPending ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
