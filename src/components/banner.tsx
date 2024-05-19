import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

export const Banner = () => {
  return (
    <div className="bg-violate p-10 relative">
      <Image
        alt="community image"
        fill
        src={
          "https://images.unsplash.com/photo-1623139369074-9c2e9c8d2962?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        className="object-cover opacity-10 pointer-events-none"
      />
      <div className="relative mx-auto flex flex-col sm:items-center w-full max-w-6xl gap-2 sm:gap-7 sm:text-center text-pretty">
        <span className="uppercase text-sm text-primary/90 font-bold">
          READY TO STAY AHEAD OF YOUR COMPETITION?
        </span>
        <h3 className="text-5xl max-sm:text-4xl font-bold max-w-4xl text-white">
          Join millions of people around the world inversting cryptocurrency
          with us.
        </h3>
        <Link href={"/buy-crypto"}>
          <Button className="text-lg w-fit px-12 font-bold rounded-full mt-4 drop-shadow-md bg-gradient-to-b from-primary to-orange-500">
            Invest With Us Now
          </Button>
        </Link>
      </div>
    </div>
  );
};
