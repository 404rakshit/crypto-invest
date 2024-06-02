'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { modalData, modalState } from "@/lib/jotai"
import { getFiles } from "@/util/utfiles"
import { ClassNames } from "@emotion/react"
import { useAtom } from "jotai"
import { AtSign, ClipboardList, RefreshCcw } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function Modal() {
  const [open, setOpen] = useAtom(modalState)
  const [user] = useAtom(modalData)
  const [img, setImg] = useState<string | null>(null)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {/* <Button variant="outline">Edit Profile</Button> */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>User Info</DialogTitle>
          <DialogDescription>
            Make changes to user profile here.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-1 py-4">
          <Label className="flex text-2xl h-fit font-semibold items-center gap-2">
            {user.fname + " " + user.lname}
            <span className="px-3 py1 rounded-full bg-violate text-white text-sm h-fit">{user.username}</span>
            <div className="flex gap-2 items-center ml-auto">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Verify</Label>
            </div>
          </Label>

          <Label className="flex text-muted-foreground font-medium items-center gap-1">
            <AtSign className="h-5 w-5" />{user.email}
          </Label>

          <Label className="flex text-muted-foreground font-medium items-center gap-1">
            <ClipboardList className="h-5 w-5" />{user.docType || "Not Uploaded"}
          </Label>
          <div className="flex text-sm items-center gap-2 py-2">
            {user.front ? <button onClick={async () => {
              const urls = await getFiles(user.front)
              setImg(urls[0].url)
            }} className="p-2 border w-full line-clamp-1 leading-4 text-white rounded-md bg-green-800/90">Front</button> : <button className="p-2 border w-full line-clamp-1 leading-4 text-white rounded-md bg-red-800/90">Not Available</button>}
            {user.back ? <button onClick={async () => {
              const urls = await getFiles(user.front)
              setImg(urls[0].url)
            }} className="p-2 border w-full line-clamp-1 leading-4 text-white rounded-md bg-green-800/90">Back</button> : <button className="p-2 border w-full line-clamp-1 leading-4 text-white rounded-md bg-red-800/90">Not Available</button>}
          </div>

          {img ? <Image src={img} alt="doc image" width={500} height={500} /> : <div className="w-full h-40 border-2 border-dashed text-black/20 font-semibold flex items-center justify-center">Click above to files</div>}
          {img && <Button variant={"destructive"} onClick={() => setImg(null)}><RefreshCcw className="h-4 w-4" />Refresh</Button>}
        </div>
        <DialogFooter>
          <Button type="submit">Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
