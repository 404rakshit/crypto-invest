"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import Image from "next/image";
import Script from "next/script";

export default function CryptoTable() {
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ];

  const cryptocoins = [
    { icon: "bitcoin.svg", name: "Bitcoin", prize: 60732.0, change: -2.92 },
    { icon: "ethereum.svg", name: "Ethereum	", prize: 2906.04, change: -3.78 },
    { icon: "toncoin.svg", name: "Toncoin", prize: 6.74, change: 5.32 },
    // { icon: "tether.svg", name: "Tether", prize: 1.0, change: 0.07 },
    { icon: "bnb.svg", name: "BNB", prize: 586.84, change: -1.65 },
    { icon: "xrp.svg", name: "XRP", prize: 0.503639, change: -2.84 },
    { icon: "solana.svg", name: "Solana", prize: 146.42, change: -2.84 },
    { icon: "dogecoin.svg", name: "Dogecoin", prize: 0.143698, change: -4.34 },
    // { icon: "usdc.svg", name: "USDC", prize: 1.0, change: -0 },
    // {
    //   icon: "lido.svg",
    //   name: "Lido Staked Ether",
    //   prize: 2904.13,
    //   change: -3.73,
    // },
  ];

  return (
    <div className="bg-background p-4 md:p-10">
      <div className="relative mx-auto flex max-sm:flex-col w-full max-w-6xl gap-4 sm:gap-10">
        <div className="sm:sticky top-10 h-fit flex-1 flex flex-col gap-2 max-w-xl sm:py-10 max-sm:text-center">
          <h2 className="text-5xl max-sm:text-4xl font-bold text-balance bg-gradient-to-r from-primary to-orange-600 bg-clip-text">
            The <span className="text-transparent">Global Crypto Exchange</span>{" "}
            is live here
          </h2>
          <p className="max-sm:text-sm text-muted-foreground">
            Unlock the Future of Finance with Crypto Investments and Discover
            the Power of Digital Assets with Crypto Invest USA. Join us for
            understanding the real world examples and practices.
          </p>
          <Button className="hidden sm:block text-lg w-fit px-12 font-semibold rounded-full mt-2 drop-shadow-md bg-gradient-to-b from-primary to-orange-500">
            Join Us
          </Button>
        </div>
        <div className="flex-1 w-full sm:max-w-5xl gap-6 overflow-hidden">
          {/* Table */}
          {/* <Table className="max-h-40 overflow-hidden">
            <TableCaption>A list of classic crypto coins.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-0 sm:w-[30px]">#</TableHead>
                <TableHead>Coins</TableHead>
                <TableHead>Prize</TableHead>
                <TableHead className="text-right">24h%</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="h-60">
              {cryptocoins.map(({ change, icon, name, prize }, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{i + 1}</TableCell>
                  <TableCell className="flex items-center gap-2">
                    <Image
                      src={`/coins/${icon}`}
                      alt={name}
                      width={20}
                      height={20}
                    />
                    <span>{name}</span>
                  </TableCell>
                  <TableCell>$ {prize}</TableCell>
                  <TableCell className="text-right">{change}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table> */}
          <NewTable />
        </div>
        <Button className="sm:hidden px-12 font-semibold rounded-full mt-2 drop-shadow-md ">
          Join Us
        </Button>
      </div>
    </div>
  );
}

function NewTable() {
  return (
    <>
      <Script src="https://widgets.coingecko.com/gecko-coin-list-widget.js" />
      {/* @ts-ignore */}
      <gecko-coin-list-widget
        locale="en"
        outlined="true"
        coin-ids="the-open-network,notcoin,simon-s-cat,tron,sun-token,pepe,sundog,bitcoin,bittensor,sui,popcat,kaspa,ondo-finance,solana,layerzero,ethereum,tether,binancecoin,stader-bnbx,bomber-coin,senspark,bnbee,bnbking,bnb-bank,wat-bnb,bnb-pets,pepebnbs,flork-bnb,wrapped-bitcoin,ripple,harrypotterobamapacman8inu,xrps,xrp20,dogecoin,usd-coin"
        initial-currency="usd"
      >
        {/* @ts-ignore */}
      </gecko-coin-list-widget>
    </>
  );
}

// function NewTable() {
//   return (
//     <div className="relative">
//       {/* <div className="tradingview-widget-container__widget"></div> */}
//       <div>
//         <a
//           href="https://in.tradingview.com/"
//           rel="noopener nofollow"
//           target="_blank"
//         >
//           <span className="blue-text">Track all markets on TradingView</span>
//         </a>
//       </div>
//       <Script
//         type="text/javascript"
//         src="https://s3.tradingview.com/external-embedding/embed-widget-screener.js"
//         defer
//         dangerouslySetInnerHTML={{
//           __html: `{
//         "width": 400,
//         "height": 500,
//         "defaultColumn": "overview",
//         "screener_type": "crypto_mkt",
//         "displayCurrency": "USD",
//         "colorTheme": "light",
//         "locale": "in"
//         }`,
//         }}
//       />
//     </div>
//   );
// }
