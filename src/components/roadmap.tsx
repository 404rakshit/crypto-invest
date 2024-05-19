"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { right } from "@/lib/fonts";

export default function Roadmap() {
  const slides = [
    {
      title: "Education and Research",
      desc: "Knowledge is power. Start by educating yourself about cryptocurrencies, blockchain technology, and the factors influencing market movements. Dive into reputable resources, attend webinars, and stay updated with the latest news and trends.",
    },
    {
      title: "Define Your Investment Goals",
      desc: "What do you aim to achieve with your crypto investments? Whether it's long-term wealth accumulation, portfolio diversification, or short-term gains, clearly define your investment objectives to tailor your strategy accordingly.",
    },
    {
      title: "Assess Your Risk Tolerance",
      desc: "Cryptocurrency markets are known for their volatility. Assess your risk tolerance honestly and determine how much you're willing to invest in this high-risk, high-reward asset class.",
    },
    {
      title: "Choose a Reliable Exchange",
      desc: "Select a reputable cryptocurrency exchange that prioritizes security, offers a user-friendly interface, and provides a wide range of trading options. Conduct thorough research and read user reviews before making your decision.",
    },
    {
      title: "Secure Your Wallet",
      desc: "Safeguard your digital assets by setting up a secure cryptocurrency wallet. Choose between hardware wallets, software wallets, or mobile wallets, depending on your preferences and security needs.",
    },
    {
      title: "Diversify Your Portfolio",
      desc: "Spread your investments across different cryptocurrencies to mitigate risk and maximize potential returns. Consider allocating a portion of your portfolio to established coins like Bitcoin and Ethereum, as well as promising altcoins with growth potential.",
    },
    {
      title: "Develop an Investment Strategy",
      desc: "Craft a well-defined investment strategy based on your research, goals, and risk tolerance. Decide whether you'll be a long-term holder or an active trader, and establish clear entry and exit points.",
    },
    {
      title: "Monitor Market Trends",
      desc: "Stay informed about market trends, news, and developments in the cryptocurrency space. Regularly monitor the performance of your investments and be prepared to adjust your strategy in response to changing market conditions.",
    },
    {
      title: "Stay Disciplined",
      desc: "Emotions can cloud judgment and lead to impulsive decisions. Stay disciplined and stick to your investment strategy, even during periods of market volatility. Avoid chasing quick profits and focus on long-term growth.",
    },
    {
      title: "Review and Adapt",
      desc: "Regularly review your investment portfolio and make necessary adjustments to keep it aligned with your goals and risk tolerance. Be open to learning and adapting your strategy based on your experiences and market insights.",
    },
  ];
  return (
    <div className="bg-background p-4 md:p-10">
      <div className="mx-auto flex flex-col w-full max-w-6xl gap-10">
        <div className="grid gap-2 mx-auto text-center max-w-xl">
          <h2 className="text-4xl max-sm:text-3xl font-semibold">
            The Road Map To Success
          </h2>
          <p className="text-sm text-muted-foreground">
            Our experts are dedicated to guiding you through the exciting world
            of crypto investment. Here’s your comprehensive roadmap to success
            in navigating the crypto investment process:
          </p>
        </div>
        <div className="mx-auto w-full max-w-xl sm:max-w-5xl gap-6">
          {/* Slider */}
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnFocusIn: false,
                stopOnMouseEnter: true,
                stopOnInteraction: false,
              }),
            ]}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full mx-auto"
          >
            <CarouselContent>
              {slides.map(({ title, desc }, index) => (
                <CarouselItem
                  key={index}
                  className="max-sm:basis-4/5 max-md:basis-1/2 basis-1/3 h-full"
                >
                  <div className="p-1 h-full">
                    <Card className="bg-muted/40 min-h-[270px]">
                      <CardHeader className="flex gap-2 items-center">
                        <div className="p-1.5 bg-gradient-to-tr from-yellow-600 to-orange-600 backdrop-blur-sm rounded-full flex items-center gap-2 shrink-0 max-w-72 mx-auto">
                          <div
                            className={`${right.className} p-5 py-2 rounded-full text-3xl bg-muted flex-auto shrink-0 grow`}
                          >
                            {index + 1}
                          </div>
                          <CardTitle className="line-clamp-2 text-xl leading-5 text-white">
                            {title}
                          </CardTitle>
                        </div>
                        <CardDescription className="text-center">
                          {desc}
                        </CardDescription>
                      </CardHeader>
                      {/* <CardContent className="flex items-center justify-center p-6">
                        <span className="text-3xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent> */}
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex gap-2 justify-center py-2 w-full">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
