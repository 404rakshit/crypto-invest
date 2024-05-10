import { Banner } from "@/components/banner";
import Hero from "@/components/hero";
import Services from "@/components/services";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://crypto-invest-eight.vercel.app/"),
  title: "Contact Us | CryptoInvestUSA",
  description: "The new way to invest your digital currency.",
  openGraph: {
    images: "/home.png",
    title: "Contact Us | CryptoInvestUSA",
    description: "The new way to invest your digital currency.",
    url: "https://cryptoinvestusa.com",
    type: "website",
  },
};

export default function About() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Hero
        title="Contact Us"
        desc="Unlock the Future of Finance with Crypto Investments and Discover the Power of Digital Assets with Crypto Invest USA"
        heroImage="https://images.unsplash.com/photo-1641580529558-a96cf6efbc72?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col max-md:gap-4 bg-muted/40 pt-2">
        {/* <InvestTray />
        <Roadmap /> */}
        <Services />
        {/* <CryptoTable /> */}
        <Banner />
      </main>
    </div>
  );
}
