import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ReactQuery from "@/util/queryProvider";
import Footer from "@/components/footer";
import { Toaster } from "sonner";

const inter = Bricolage_Grotesque({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Crypto Invest USA",
  description: "The new way to invest your digital currency.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden text-violet-800 flex flex-col min-h-screen`}>
        {/* <div className="flex flex-col gap-1 m-auto">
          <Image src="/payment-due.gif" alt="Crypto Invest USA Developer's Payment Due" height={700} width={700} className="aspect-video" />
          <Link target="_blank" href={"mailto:devproject193@gmail.com"}>
            <Button variant={"destructive"} className="w-full">Contact Developer Now</Button>
          </Link>
        </div> */}
        {/* <span className="text-5xl text-black font-bold m-auto">404 Error</span> */}
        <ReactQuery>
          {children}
          <Footer />
          <Toaster richColors />
        </ReactQuery>
      </body>
    </html>
  );
}
