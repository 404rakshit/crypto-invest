"use client";

import { CircleUser, Lock, LogIn, Menu, Package2, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const path = usePathname();
  const [sideState, setSideState] = useState(false);
  useEffect(() => {
    setSideState(false);
  }, [path]);

  const nav = [
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div className="sticky z-10 top-0 h-16 border-b bg-background">
      <header className="px-4 md:px-6 max-w-[90rem] mx-auto flex items-center justify-between gap-4 h-16">
        <Sheet open={sideState} onOpenChange={setSideState}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              {/* <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link> */}
              <Link href={"/"}>
                <Image
                  src={"/logo.png"}
                  alt=""
                  width={150}
                  height={150}
                  className="object-cover"
                />
              </Link>
              {nav.map(({ title, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {title}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link href={"/"} className="shrink-0">
            <Image
              src={"/logo.png"}
              alt=""
              width={150}
              height={150}
              className="shrink-0"
            />
          </Link>
          {/* <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold "
        >
          <span className="sr-only">Acme Inc</span>
        </Link> */}
          {nav.map(({ title, href }, i) => (
            <Link
              key={i}
              href={href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {title}
            </Link>
          ))}
        </nav>
        <Link href={"/"} className="md:hidden shrink-0">
          <Image
            src={"/logo.png"}
            alt=""
            width={150}
            height={150}
            className="shrink-0"
          />
        </Link>
        <div className="flex items-center gap-4 md:gap-2 lg:gap-4">
          <Link href={"/login"} className="px-3 py-2 rounded-md bg-primary">Login</Link>
        </div>
      </header>
    </div>
  );
}
