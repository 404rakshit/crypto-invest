import { Banner } from "@/components/banner";
import CryptoTable from "@/components/crypto-table";
import Hero from "@/components/og-hero";
import InvestTray from "@/components/invest-tray";
import Roadmap from "@/components/roadmap";
import Services from "@/components/services";
import { Metadata } from "next";
import Image from "next/image";
import InvestForm from "./invest-form";
import Exchange from "./exchange";

export const metadata: Metadata = {
  metadataBase: new URL("https://crypto-invest-eight.vercel.app/"),
  title: "Invest Crypto | CryptoInvestUSA",
  description: "The new way to invest your digital currency.",
  openGraph: {
    images: "/home.png",
    title: "Invest Crypto | CryptoInvestUSA",
    description: "The new way to invest your digital currency.",
    url: "https://cryptoinvestusa.com",
    type: "website",
  },
};

export default function About() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Hero
        title="Invest in Cryptocurrency"
        desc="Dive into Crypto Investments Today and Explore the World of Digital Assets with Crypto Invest USA"
        heroImage="https://images.unsplash.com/photo-1629877521896-4719f02df3c7?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col max-md:gap-4 bg-muted/40 pt-2">
        <div className="p-4 md:p-10">
          <div className="mx-auto grid md:grid-cols-2 w-full max-w-6xl gap-8">
            <div className="grid place-items-center gap-4 h-fit m-auto max-w-sm">
              <h2 className="text-4xl max-sm:text-3xl font-semibold">
                Putting our investors first is the Key
              </h2>
              <p className="text-sm text-muted-foreground">
                We are committed to providing our customers with exceptional
                service while offering our employees the best training.
              </p>
              <p className="text-sm text-muted-foreground">
                Crypto Invest Options is an International online broker that has
                been actively operating in the Forex/CFDs trading markets. With
                our advanced, web-based trading platform, you can trade on the
                largest lists of assets in the industry.
              </p>
              <p className="text-sm text-muted-foreground">
                From Currency pairs, and Commodities to stocks and indices, we
                have it all. Keep your trading costs down with competitive
                spreads, commissions and low margins. View spreads on our most
                popular cash instruments.
              </p>
            </div>
            <InvestForm />
          </div>
        </div>
        <Exchange />
      </main>
    </div>
  );
}
