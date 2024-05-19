"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero({
  title,
  desc,
  heroImage,
  link,
}: {
  title: string;
  desc: string;
  heroImage: string;
  link?: {
    title: string;
    href: string;
  };
}) {
  return (
    <div
      className={`w-full grid relative overflow-hidden min-h-[400px] bg-background`}
    >
      <Image
        alt="community image"
        fill
        loader={() => heroImage}
        src={heroImage}
        className="object-cover object-left-top pointer-events-none"
      />
      <div className="relative">
        <div className="sm:p-[12.5rem_2.5rem_6.75rem] max-sm:p-[12rem_1rem_2.75rem] m-auto max-w-7xl flex justify-between text-white">
          <section className="grid gap-5">
            <h1
              className={`max-w-xl max-sm:max-w-sm font-jakarta sm:text-[3.5rem] text-[3rem] font-extrabold text-primary leading-[3rem] text-balance`}
            >
              {title}
            </h1>

            <p className="max-w-[35rem] text-lg max-md:text-[1.05rem] max-md:leading-6 text-white font-semibold">
              {desc}
            </p>

            <Link href={link?.href ?? "/signup"}>
              <Button className="w-fit px-6 bg-primary sm:text-lg rounded-full bg-gradient-to-b from-primary to-orange-500 font-bold">
                {link?.title ?? "Invest Now"}
              </Button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
