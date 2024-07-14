"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { Dispatch, SetStateAction, Suspense } from "react";

import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image";
import Link from "next/link";

export default function ContactForm() {
  const [isPending, setPending] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    message: "",
  });
  const [open, setOpen] = useState(false)

  function Success() {
    setOpen(true)
    setFormData({
      email: "",
      name: "",
      phone: "",
      message: "",
    })
  }

  const alrt = (field: string, message: string) => {
    toast(`Something wrong with ${field}`, {
      description: message
    });
    setPending(false);
  };

  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
    setPending(true);

    e.preventDefault();
    const { email, message, name, phone } = formData
    if (!phone) return alrt("phone", "Phone number is either too short or long!");
    if (phone.length < 9) return alrt("phone", "Phone number is too short");
    if (phone.length > 12) return alrt("phone", "Phone number is long!");
    if (!email) return alrt("email", "Email is required");
    if (!name) return alrt("name", "Name is Requierd");
    if (!message) return alrt("message", "Message is Requierd");


    const res = await fetch(`/api/contact`, {
      method: "POST",
      body: JSON.stringify({
        email,
        phone,
        name,
        message,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const resData = await res.json();
    Success()
    setPending(false);
  };

  return (
    <>
      <form onSubmit={handleForm} className="grid gap-4 max-w-xl w-full mx-auto">
        <div className="grid gap-2">
          <Label htmlFor="name">Full Name</Label>
          <Input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} name="name" id="name" placeholder="Max" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            id="phone"
            name="phone"
            type="number"
            maxLength={10}
            placeholder="+12929292929"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            id="email"
            type="email"
            name="email"
            placeholder="m@example.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            id="message"
            name="message"
            placeholder="A question would make sense"
            required
          />
        </div>

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Sending..." : "Send Message"}
        </Button>
      </form>
      <Suspense fallback={<></>}>
        <Modal open={open} setOpen={setOpen} />
      </Suspense>
    </>
  );
}

export function Modal({ open, setOpen }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          {/* <DialogTitle>Edit profile</DialogTitle> */}
          <Image src={"/oldlogo.png"} alt="crypto-invest-logo" height={40} width={40} className="m-auto" />
          <DialogDescription className="text-center">
            Thank you for reaching us, we will response to your message as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="">
          <Link target="_blank"
            href={
              "https://api.whatsapp.com/send/?phone=14137493589&text&type=phone_number"
            } className="m-auto" type="submit"><Button>Connect on Whatsapp</Button></Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
