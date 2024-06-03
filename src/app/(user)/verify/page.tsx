import Link from "next/link";
import DocForm from "./documentForm";
import { getSession, setVerified } from "@/util/useSession";
import PostDocForm from "./uploadedFiles";
import prisma from "@/util/prismaClient";
import Verified from "./verified";
import { redirect } from "next/navigation";
import { admin } from "@/lib/jotai";

export default async function Dashboard() {

  const session =  await getSession()
  if (session.email == admin) redirect("/admin")

  const data = await prisma.user.findUnique({
    where: {
      username: session.username
    },
    select:{
      verified: true
    }
  })

  // await setVerified(data?.verified || false)

  return (
    <main className="flex flex-col flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 bg-muted/40 min-h-screen">
      <div className="flex items-start lg:items-center justify-center p-5 sm:py-10 px-5 max-w-3xl mx-auto w-full">
        <div className="grid gap-6">
          <div className="grid gap-2">
            <h1 className="text-3xl font-bold">Upload Document</h1>
            <p className="text-muted-foreground">
              (Driving License or Government ID card) Uploading your ID helps as
              ensure the safety and security of your funds
            </p>
          </div>
          {/* {session.verified ? "bro" : "BRO"} */}
          {data?.verified ? <Verified /> : session.fileUploaded ? <PostDocForm/> : <DocForm />}
        </div>
      </div>
    </main>
  );
}
