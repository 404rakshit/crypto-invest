"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Autoplay from "embla-carousel-autoplay";
import { right } from "@/lib/fonts";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DollarSign, FastForward, RefreshCcw } from "lucide-react";
import { useRef, useState } from "react";
import Image from "next/image";

export default function Exchange() {
  const [inp, setInp] = useState<number>(100);
  const [usd, setUsd] = useState<number>(inp);
  const inputRef = useRef();

  const from = [{ icon: <DollarSign className="w-4 h-4" />, title: "USD" }];
  const to = [
    { icon: "/coins/bitcoin.svg", title: "BTC" },
    { icon: "/coins/ethereum.svg", title: "ETH" },
  ];
  return (
    <div className="bg-background p-4 md:p-10 pb-10">
      <div className="mx-auto flex flex-col w-full max-w-6xl gap-10">
        <div className="grid gap-2 mx-auto text-center max-w-xl">
          <h2 className="text-4xl max-sm:text-3xl font-semibold">
            You Can Also Do it Yourself
          </h2>
          <p className="text-sm text-muted-foreground">
            Click on trade to start trading in any cryptocurrency of your
            choice. Fast, secure and easy to trade in our online trading
            platform.
          </p>
        </div>
        <div className="mx-auto w-full max-w-xl gap-6">
          {/* Slider */}
          <Card className="bg-muted/40 min-h-[270px]">
            {/* <CardHeader className="flex gap-2 items-center">
              <div className="p-1.5 bg-gradient-to-tr from-yellow-600 to-orange-600 backdrop-blur-sm rounded-full flex items-center gap-2 shrink-0 max-w-72 mx-auto">
                <div
                  className={`${right.className} p-5 py-2 rounded-full text-3xl bg-muted flex-auto shrink-0 grow`}
                >   
                  1
                </div>
                <CardTitle className="line-clamp-2 text-xl leading-5">
                  {"title"}
                </CardTitle>
              </div>
              <CardDescription className="text-center">
                {"desc"}
              </CardDescription>
            </CardHeader> */}
            <CardContent className="flex flex-col gap-5 items-center justify-center p-6">
              <div className="flex justify-between items-center gap-2 max-sm:flex-col w-full">
                <span className="font-semibold">From</span>
                <SelectOptions data={from} />
              </div>
              <div className="flex justify-between items-center gap-2 max-sm:flex-col w-full">
                <span className="font-semibold">To</span>
                <SelectOptions data={to} />
              </div>
              <section className="flex flex-col gap-0.5 w-full">
                <div className="flex justify-between items-center gap-2 max-sm:flex-col w-full">
                  <span className="font-semibold">Enter Amount</span>
                  <Input
                    value={inp}
                    onChange={(e) => setInp(+e.target.value)}
                    className="w-[180px] placeholder:text-muted-foreground"
                    placeholder="$ 100"
                  />
                </div>
                <span className="font-bold text-xs text-muted-foreground self-center sm:self-end">
                  Min $100
                </span>
              </section>
              <Button
                onClick={(e) => {
                  //   if (!(inp < 10)) return null;
                  setUsd(inp);
                }}
                className="flex gap-2 font-semibold my-7"
              >
                <span>Convert</span>
                <RefreshCcw className="h-4 w-4" />
              </Button>

              <div className="flex justify-between items-center gap-2 max-sm:flex-col w-full">
                <span className="font-semibold">Exchange Rate (USD/BTC)</span>
                <span className="font-bold text-muted-foreground">
                  0.00001538
                </span>
              </div>
              <div className="flex justify-between items-center gap-2 max-sm:flex-col w-full">
                <span className="font-semibold">Fee</span>
                <span className="font-bold text-muted-foreground">
                  $ {0.025 * (usd ?? 100)}
                </span>
              </div>
              <div className="flex justify-between items-center gap-2 max-sm:flex-col w-full">
                <span className="font-semibold">You will get</span>
                <span className="font-bold text-muted-foreground">
                  BTC {(0.00001499 * (usd ?? 100)).toFixed(6)}
                </span>
              </div>
              <Button
                variant={"outline"}
                className="flex gap-2 font-semibold mt-7"
              >
                <span>Buy (BTC {(0.00001499 * (usd ?? 100)).toFixed(6)})</span>
                <FastForward className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function SelectOptions({
  data,
}: {
  data: { icon: string | JSX.Element; title: string }[];
}) {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue
          defaultValue={data[0].title}
          placeholder="Select any one"
        />
      </SelectTrigger>
      <SelectContent>
        {data.map(({ icon, title }, i) => {
          if (typeof icon === "string")
            return (
              <SelectItem key={i} value={title}>
                <div className="w-full items-center flex gap-2">
                  <Image src={icon} alt={title} width={20} height={20} />
                  <span>{title}</span>
                </div>
              </SelectItem>
            );

          return (
            <SelectItem key={i} value="system">
              <div className="w-full flex gap-2">
                {icon}
                <span>{title}</span>
              </div>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
