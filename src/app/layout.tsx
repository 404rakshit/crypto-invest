import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import ReactQuery from "@/util/queryProvider";
import { Toaster } from "@/components/ui/sonner";

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
      <body className={`${inter.className} overflow-x-hidden text-violate`}>
        <ReactQuery>
          {children}
          <Footer />
          <Toaster richColors />
        </ReactQuery>
      </body>
    </html>
  );
}
