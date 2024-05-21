"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export default function Hero({
  title,
  desc,
  heroImage,
}: {
  title: string;
  desc: string;
  heroImage: string;
}) {
  const [api, setApi] = useState<CarouselApi>();

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      plugins={[
        Autoplay({
          delay: 3600,
          stopOnFocusIn: false,
          stopOnMouseEnter: false,
          stopOnInteraction: false,
        }),
      ]}
      opts={{
        align: "center",
        loop: true,
      }}
    >
      <CarouselContent>
        <CarouselItem>
          <HeroBanner
            title="Invest Your Digital Currency!"
            desc="Experience the Potential of Crypto Investments and Take Control of Your Investments with Crypto Invest USA!"
            heroImage="/banner/banner1.png"
            pos={1}
            current={current}
          />
        </CarouselItem>
        <CarouselItem>
          <HeroBanner
            title="Join Us and Invest Digitally Now!"
            desc="Unlock the Future of Finance with Crypto Investments and Discover the Power of Digital Assets with Crypto Invest USA"
            heroImage="/banner/banner2.png"
            pos={2}
            current={current}
          />
        </CarouselItem>
        <CarouselItem>
          <HeroBanner
            title="Start Investing Crypto Now!"
            desc="Empower Your Wealth: Dive into Crypto Investments Today and Explore the World of Digital Assets with Crypto Invest USA "
            heroImage="/banner/banner3.jpg"
            pos={3}
            current={current}
          />
        </CarouselItem>
      </CarouselContent>
      <span className="absolute left-3 top-1/2">
        <CarouselPrevious className="bg-background/60 border-none" />
      </span>
      <span className="absolute right-3 top-1/2">
        <CarouselNext className="bg-background/60 border-none" />
      </span>
    </Carousel>
  );
}

function HeroBanner({
  title,
  desc,
  heroImage,
  current,
  pos,
}: {
  title: string;
  desc: string;
  heroImage: string;
  current: number;
  pos: number;
}) {
  return (
    <Link href={"/signup"}>
      <div
        className={`w-full grid relative overflow-hidden min-h-[400px] bg-black`}
      >
        <Image
          alt="community image"
          fill
          loader={() => heroImage}
          src={heroImage}
          className="object-cover opacity-70 pointer-events-none"
        />
        <div className="relative">
          <div className="sm:p-[12.5rem_2.5rem_6.75rem] max-sm:p-[8rem_4rem_2.75rem] m-auto max-w-7xl flex justify-between">
            <section
              className={`grid gap-2 md:gap-5 place-items-center text-center mx-auto opacity-0 transition-all delay-500 duration-700 ${
                current === pos && "-translate-y-10 opacity-100"
              }`}
            >
              <h1
                className={`max-w-xl max-sm:max-w-sm font-jakarta sm:text-[3.5rem] text-[2.5rem] font-extrabold text-primary leading-[3rem] line-clamp-3`}
              >
                {title}
              </h1>

              <p className="max-w-[35rem] text-lg max-md:text-[1.05rem] max-md:leading-6 text-white font-semibold">
                {desc}
              </p>

              <Button className="w-fit px-6 bg-primary sm:text-lg rounded-full bg-gradient-to-b from-primary to-orange-500 font-bold">
                Invest Now
              </Button>
            </section>
          </div>
        </div>
      </div>
    </Link>
  );
}
