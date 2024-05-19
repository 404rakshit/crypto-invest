import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://crypto-invest-eight.vercel.app/"),
  title: "Privacy Policy | CryptoInvestUSA",
  description:
    "By using the Website, you acknowledge that you have read, understood all of our Privacy Policy.",
  openGraph: {
    images: "/home.png",
    title: "Privacy Policy | CryptoInvestUSA",
    description:
      "By using the Website, you acknowledge that you have read, understood all of our Privacy Policy.",
    url: "https://cryptoinvestusa.com",
    type: "website",
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-[75rem] m-auto flex min-h-screen w-full flex-col gap-3 p-6">
      <div className="flex flex-col gap-1 py-7 items-center">
        <h1 className="text-3xl font-bold text-violate">
          Disclaimer for Crypto Invest USA
        </h1>
      </div>

      <h2 className="text-2xl font-bold pt-2">Important Notice:</h2>

      <p>
        The information provided on Crypto Invest USA’s website is for general
        informational purposes only. It should not be considered as financial
        advice. Cryptocurrency investments carry inherent risks, including but
        not limited to market volatility and potential loss of capital.
      </p>

      <h2 className="text-2xl font-bold pt-2">Investment Risks:</h2>
      <p>
        Investing in cryptocurrencies involves risks, and prices can fluctuate
        widely. Past performance is not indicative of future results. Investors
        should be aware of the risks involved and consider their investment
        objectives and level of experience before making any investment
        decisions.
      </p>

      <h2 className="text-2xl font-bold pt-2">Independent Research:</h2>
      <p>
        Crypto Invest USA does not provide personalized investment advice.
        Investors are encouraged to conduct their own research and seek advice
        from qualified financial professionals before making investment
        decisions related to cryptocurrencies.
      </p>

      <h2 className="text-2xl font-bold pt-2">No Guarantees:</h2>
      <p>
        There are no guarantees of profit or protection against losses when
        investing in cryptocurrencies. Prices can change rapidly, and investors
        should be prepared for potential losses.
      </p>

      <h2 className="text-2xl font-bold pt-2">Regulatory Considerations:</h2>
      <p>
        Regulatory changes and government interventions can impact the
        cryptocurrency market. Investors should stay informed about the legal
        status of cryptocurrencies in their jurisdictions.
      </p>

      <h2 className="text-2xl font-bold pt-2">Use of Website:</h2>
      <p>
        By using the Crypto Invest USA website, you agree that the website and
        its content are provided on an “as is” basis. We do not warrant the
        accuracy, completeness, or reliability of any information on the
        website.
      </p>

      <h2 className="text-2xl font-bold pt-2">No Endorsement:</h2>
      <p>
        Any mention of specific cryptocurrencies or projects on the Crypto
        Invest USA website does not constitute an endorsement. We do not endorse
        or promote any particular cryptocurrency.
      </p>

      <h2 className="text-2xl font-bold pt-2">Final Thoughts:</h2>
      <p>
        Investing in cryptocurrencies should be done with caution and an
        understanding of the risks involved. Crypto Invest USA disclaims any
        liability for any investment decisions made based on the information
        provided on its website.
      </p>

      <h2 className="text-2xl font-bold pt-2">Contact Information</h2>
      <p>
        If you have any questions or concerns about these Terms and Conditions,
        please contact us at{" "}
        <Link
          className="text-primary hover:underline"
          href={"mailto:contact@cryptoinvestusa.com"}
        >
          contact@cryptoinvestusa.com
        </Link>
        .
      </p>
    </main>
  );
}
