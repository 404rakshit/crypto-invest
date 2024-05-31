import Image from "next/image";
import Link from "next/link";
import SignupForm from "./SignupForm";
import { Metadata } from "next";
import { getSession } from "@/util/useSession";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  metadataBase: new URL("https://crypto-invest-eight.vercel.app/"),
  title: "SignUp | CryptoInvestUSA",
  description: "SignUp form for crypto invest usa",
  openGraph: {
    images: "/home.png",
    title: "SignUp | CryptoInvestUSA",
    description: "SignUp form for crypto invest usa",
    url: "https://cryptoinvestusa.com",
    type: "website",
  },
};

export default async function SignUp() {

  const session = await getSession()

  if (session.isLoggedin) redirect("/verify")
    
  return (
    <div className="w-full lg:grid lg:grid-cols-2 place-items-start overflow-hidden">
      <div className="hidden bg-muted lg:block w-full">
        <Image
          src="https://images.unsplash.com/photo-1640340434863-6932029a76ab?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image"
          width="1280"
          height="720"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>

      <div className="flex items-start lg:items-center justify-center py-20 px-5 max-w-3xl lg:mr-auto max-lg:mx-auto w-full max-lg:min-h-screen">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">SignUp</h1>
            <p className="text-balance text-muted-foreground">
              Enter your information to create a new account
            </p>
          </div>
          <SignupForm />
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
