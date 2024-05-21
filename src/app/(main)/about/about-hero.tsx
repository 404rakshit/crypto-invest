"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
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
      className={`w-full max-md:bg-gradient-to-tr max-md:from-70% max-md:from-violate max-md:to-primary max-md:flex max-md:flex-col-reverse relative min-h-[400px] bg-background`}
    >
      {/* <Image
        alt="community image"
        fill
        loader={() => heroImage}
        src={heroImage}
        className="object-cover object-left-top pointer-events-none"
      /> */}
      <div className="relative bg-violate md:bg-gradient-to-tr md:from-70% md:from-violate md:to-primary [clip-path:_polygon(0_0,_100%_0,_100%_85%,_0_95%)]">
        <div className="md:p-[12.5rem_2.5rem_6.75rem] max-md:p-[2rem_1rem_2.75rem] m-auto max-w-7xl flex flex-col justify-between text-white">
          <section className="grid h-fit gap-2 md:gap-5">
            <h1
              className={`max-w-xl max-sm:max-w-sm font-jakarta sm:text-[3.5rem] text-[2.5rem] font-extrabold text-primary leading-[2.5rem] md:leading-[3.5rem] text-balance`}
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
          <div className="md:h-20 w-full"></div>
        </div>
      </div>
      <div className="md:h-20 md:absolute bottom-1/2 md:-translate-y-20 right-8 md:right-16 lg:right-32 pt-5">
        <div className="relative md:h-[500px] w-11/12 mx-auto md:w-96 border-8 rounded-2xl overflow-hidden max-md:p-5 max-md:h-96">
          <Image
            src={"/banner/banner4.jpg"}
            alt={""}
            className="object-cover"
            fill
          />
        </div>
      </div>
    </div>
  );
}
