import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { deleteFiles, uploadFiles } from "@/util/utfiles";
import { changeUploads, getSession } from "@/util/useSession";
import prisma from "@/util/prismaClient";

import { CircleAlert, Terminal } from "lucide-react"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

export default async function PostDocForm() {

    const session = await getSession()
    const data = await prisma.user.findUnique({
        where: {
            username: session.username
        },
    })

    async function handleForm(e: FormData) {
        'use server'
        await deleteFiles([data?.front!, data?.back!])
        await changeUploads(false)
    }

    return (
        <form action={handleForm} className="grid gap-4">
            <div className="grid gap-2">
                <Label htmlFor="email" className="flex flex-col gap-1">
                    <span>Document Type</span>
                    <span className="text-muted-foreground text-xs font-semibold">
                        [E.g Drivers License, Passport etc]
                    </span>
                </Label>

                <Select disabled value={data?.docType ?? ""} name="doc-type">
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
                    <Label htmlFor="front-file">Front View</Label>
                </div>
                <Input
                    name="front-file"
                    id="front-file"
                    disabled
                    value={data?.front ?? ""}
                    className="file:text-white file:bg-primary/70 file:rounded-sm file: file:mr-2"
                />

            </div>
            <div className="grid gap-2">
                <div className="flex items-center">
                    <Label htmlFor="back-file">Back View</Label>
                </div>
                <Input
                    name="back-file"
                    id="back-file"
                    disabled
                    value={data?.back ?? ""}
                    className="file:text-white file:bg-primary/70 file:rounded-sm file:mr-2"
                    required
                />
            </div>
            <Alert>
                <CircleAlert className="h-4 w-4" />
                <AlertTitle>Notice</AlertTitle>
                <AlertDescription>
                    Keep patience, your uploaded files are undergoing inspection. <span className="font-bold">Hold on a moment</span>. For more details, Ensure to provide your Funding Code when contacting support. If you encounter any issue while funding your account, please contact <span className="font-bold">contact@cryptoinvestusa.com</span> for assistance. Your account once your payment is confirmed.
                </AlertDescription>
            </Alert>
            <Button variant={"destructive"} type="submit" className="w-full">Delete Files</Button>
        </form>
    );
}
