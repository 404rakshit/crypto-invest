import { Banner } from "@/components/banner";
import CryptoTable from "@/components/crypto-table";
import Hero from "@/components/og-hero";
import InvestTray from "@/components/invest-tray";
import Roadmap from "@/components/roadmap";
import Services from "@/components/services";
import { Metadata } from "next";
import Image from "next/image";

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
        title="About Us"
        desc="Dive into Crypto Investments Today and Explore the World of Digital Assets with Crypto Invest USA"
        heroImage="https://images.unsplash.com/photo-1631689583462-a640c75d5a4b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col max-md:gap-4 bg-muted/40 pt-2">
        <div className="mx-auto grid w-full max-w-6xl min-h-96 gap-4">
          <div className="grid sm:grid-cols-2">
            <p className="p-5 sm:p-10 md:pt-20 text-lg sm:text-right">
              Welcome to Crypto Invest USA, where pioneering technology meets
              unparalleled financial expertise to redefine the landscape of
              crypto investments. We understand the dynamic and transformative
              nature of the cryptocurrency market. Founded by a team of seasoned
              financial professionals and tech-savvy enthusiasts, we strive to
              empower investors with cutting-edge tools and insightful
              strategies to navigate this rapidly evolving space with
              confidence.
            </p>
            <div className="p-5 sm:p-10">
              <Image
                className="sm:h-[600px] object-cover"
                src="https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="team"
                height={700}
                width={700}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2">
            <div className="p-5 sm:p-10">
              <Image
                className="sm:h-[600px] object-cover"
                src="https://images.unsplash.com/photo-1627538924152-26631c2da638?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="team"
                height={700}
                width={700}
              />
            </div>
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
          </div>

          <div className="grid sm:grid-cols-2">
            <p className="p-5 sm:pt-20 sm:p-10 text-lg sm:text-right">
              Our team of experts continuously monitors market trends and
              emerging technologies to ensure that our strategies remain at the
              forefront of the industry. Transparency is at the core of
              everything we do. From our investment approach to our fee
              structure, we believe in fostering trust through open
              communication and full disclosure. We’re dedicated to providing
              you with comprehensive insights and real-time updates so that you
              can make informed decisions with confidence.
            </p>
            <div className="p-5 sm:p-10">
              <Image
                className="sm:h-[600px] object-cover"
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="team"
                height={700}
                width={700}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2">
            <div className="p-5 sm:p-10">
              <Image
                className="sm:h-[600px] object-cover"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="team"
                height={700}
                width={700}
              />
            </div>
            <p className="p-5 sm:pt-20 sm:p-10 text-lg">
              Whether you’re looking to diversify your portfolio, capitalize on
              emerging opportunities, or simply explore the potential of
              blockchain technology, Crypto Invest USA is your trusted partner
              in the world of crypto investments. Join us on this exciting
              journey and unlock the possibilities of tomorrow, today.
            </p>
          </div>
        </div>
        <Services />
        <Banner />
      </main>
    </div>
  );
}
