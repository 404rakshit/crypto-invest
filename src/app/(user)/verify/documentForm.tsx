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

import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { uploadFiles } from "@/util/utfiles";
import { UploadFileResult } from "uploadthing/types";
import { changeUploads } from "@/util/useSession";
import prisma from "@/util/prismaClient";

export default function DocForm() {
  const [isPending, setPending] = useState(false);

  async function OnSuccess(newData: any, res: UploadFileResult[], docs: string) {
    await changeUploads(true, res, docs)
    toast("Files Uploaded", {
      description: String(newData),
    });
  }

  function OnError(errData: any) {
    toast("Error Occured", {
      description: String("File size exceeded keep it less than 4mb"),
    });
  }

  const alrt = (field: string) => {
    toast(`Something went wrong`, {
      description: field,
    });
    setPending(false);
  };

  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
    setPending(true);

    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const { front, back, docs } = {
      front: data.get("front-file"),
      back: data.get("back-file"),
      docs: data.get("doc-type")?.toString(),
    };

    if (!front) return alrt("Front File");
    if (!back) return alrt("Back File");
    if (!docs) return alrt("Please select a file type");

    const res = await uploadFiles(data)

    setPending(false);
    if (!res) return OnError("Unable to upload files");
    return OnSuccess("Wait for the KYC Verification", res, docs);
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

        <Select name="doc-type">
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
          type="file"
          className="file:text-white file:bg-primary/70 file:rounded-sm file: file:mr-2"
          required
        />

      </div>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="back-file">Back View</Label>
        </div>
        <Input
          name="back-file"
          id="back-file"
          type="file"
          className="file:text-white file:bg-primary/70 file:rounded-sm file:mr-2"
          required
        />
      </div>
      <Button disabled={isPending} type="submit" className="w-full">
        {isPending ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
