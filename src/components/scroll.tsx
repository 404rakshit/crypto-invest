import { ArrowUp } from "lucide-react";
import Image from "next/image";
import Script from "next/script";
import React from "react";

export default function Scroll() {
  return (
    <>
      <Script src="https://widgets.coingecko.com/gecko-coin-price-marquee-widget.js" />
      <div className="new-scroll">
        {/* @ts-ignore */}
        <gecko-coin-price-marquee-widget
          locale="en"
          outlined="true"
          coin-ids="bitcoin,the-open-network,solana,tron,ripple,ethereum,tether,dogecoin,usd-coin"
          initial-currency="usd"
        >
          {/* @ts-ignore */}
        </gecko-coin-price-marquee-widget>
      </div>
    </>
  );

  return (
    <div className="scroll">
      <div className="m-scroll">
        <Sticker
          src="/lido.svg"
          per={1.15}
          title="Lido Staked Ether (STETH)"
          value={2949.85}
        />
        <Sticker
          src="/toncoin.svg"
          title={"Toncoin (TON)"}
          value={6.7}
          per={3.94}
        />
        <Sticker
          src="/dogecoin.svg"
          title={"Dogecoin (DOGE)"}
          value={0.151407}
          per={1.41}
        />
        <Sticker
          src="/bitcoin.svg"
          title={"Bitcoin (BTC)"}
          value={65721}
          per={1}
        />
        <Sticker
          src="/ethereum.svg"
          title={"Ethereum (ETH)"}
          value={2953.02}
          per={1.1}
        />
        <Sticker
          src="/tether.svg"
          title={"Tether (USDT)"}
          value={0.999891}
          per={0.14}
        />
        <Sticker src="/bnb.svg" title={"BNB (BNB)"} value={568.54} per={2.11} />
        <Sticker
          src="/solana.svg"
          title={"Solana (SOL)"}
          value={159.93}
          per={4.05}
        />
        <Sticker src="/usdc.svg" title={"USDC (USDC)"} value={1.0} per={0.03} />
        <Sticker
          src="/xrp.svg"
          title={"XRP (XRP)"}
          value={0.518307}
          per={1.44}
        />
      </div>
    </div>
  );
}

function Sticker({
  src,
  title,
  value,
  per,
}: {
  src: string;
  title: string;
  value: number;
  per: number;
}) {
  return (
    <span className="flex items-center gap-2 text-xs px-4">
      <Image src={`/coins${src}`} alt={title} width={15} height={15} />
      <span className="font-semibold">{title}</span>
      <span className="text-muted-foreground">${value}</span>
      <span className="text-bold flex gap-1 text-green-500 items-center">
        <ArrowUp className="w-3 h-3" />
        {per}%
      </span>
    </span>
  );
}
