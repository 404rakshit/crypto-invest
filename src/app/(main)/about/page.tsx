import { Banner } from "@/components/banner";
// import CryptoTable from "@/components/crypto-table";
// import Hero from "@/components/og-hero";
// import InvestTray from "@/components/invest-tray";
// import Roadmap from "@/components/roadmap";
import Services from "@/components/services";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "./about-hero";

export const metadata: Metadata = {
  metadataBase: new URL("https://crypto-invest-eight.vercel.app/"),
  title: "About Us | CryptoInvestUSA",
  description: "The new way to invest your digital currency.",
  openGraph: {
    images: "/home.png",
    title: "About Us | CryptoInvestUSA",
    description: "The new way to invest your digital currency.",
    url: "https://cryptoinvestusa.com",
    type: "website",
  },
};

export default function About() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Hero
        title="We Help Create Financial Freedom"
        desc="Our aim is to help you invest your money in the right coin so as to maximize your investment."
        heroImage="/banner/banner4.jpg"
        link={{
          title: "Talk to Us",
          href: "https://api.whatsapp.com/send/?phone=61390284223&text&type=phone_number&app_absent=0",
        }}
      />
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col max-md:gap-4 bg-muted/40 pt-2">
        <div className="mx-auto grid w-full max-w-6xl min-h-96 gap-4 md:pt-10">
          <div className="grid sm:grid-cols-2">
            <div className="p-5 sm:p-10">
              <Image
                className="sm:h-[600px] object-cover"
                src="/banner/banner5.jpg"
                alt="team"
                height={700}
                width={700}
              />
            </div>
            <p className="p-5 sm:p-10 md:pt-20 sm:text-lg sm:text-right">
              Welcome to Crypto Invest USA, where pioneering technology meets
              unparalleled financial expertise to redefine the landscape of
              crypto investments. We understand the dynamic and transformative
              nature of the cryptocurrency market. Founded by a team of seasoned
              financial professionals and tech-savvy enthusiasts, we strive to
              empower investors with cutting-edge tools and insightful
              strategies to navigate this rapidly evolving space with
              confidence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2">
            <p className="p-5 sm:pt-20 sm:p-10 sm:text-lg">
              Our mission is simple to provide accessible, transparent, and
              secure avenues for individuals and institutions alike to
              participate in the crypto revolution. Whether you’re a seasoned
              trader or new to the world of digital assets, we’re here to guide
              you every step of the way. What sets us apart is our commitment to
              integrity and innovation. We prioritize rigorous due diligence and
              employ robust risk management protocols to safeguard your
              investments.
            </p>
            <div className="p-5 sm:p-10">
              <Image
                className="sm:h-[600px] object-cover"
                src="https://images.unsplash.com/photo-1627538924152-26631c2da638?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="team"
                height={700}
                width={700}
              />
            </div>
          </div>
        </div>
        <Services />
        <Banner />
      </main>
    </div>
  );
}
