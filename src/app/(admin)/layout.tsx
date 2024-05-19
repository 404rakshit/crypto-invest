"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  Copy,
  CreditCard,
  Euro,
  File,
  HandHelping,
  Home,
  Key,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  Users2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePathname } from "next/navigation";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { user } from "@/lib/jotai";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [side, setSide] = React.useState(false);
  const [userData, setUserData] = useAtom(user);
  const router = useRouter();

  React.useEffect(() => {
    setSide(false);
  }, [path]);

  React.useEffect(() => {
    if (!userData.lgogedIn) router.push("/login");
  }, [userData]);

  const navgation = [
    {
      icon: <Home className="h-5 w-5" />,
      name: "Dashboard",
      link: "/dashboard",
      select: path === "/dashboard",
    },
    {
      icon: <CircleUserRound className="h-5 w-5" />,
      name: "Admin",
      link: "/admin",
      select: path === "/admin",
    },
    {
      icon: <Euro className="h-5 w-5" />,
      name: "Fund Account",
      link: "/account",
      select: path === "/account",
    },
    {
      icon: <HandHelping className="h-5 w-5" />,
      name: "Withdraw Funds",
      link: "/funds",
      select: path === "/funds",
    },
    {
      icon: <LineChart className="h-5 w-5" />,
      name: "Trade History",
      link: "/trade",
      select: path === "/trade",
    },
    {
      icon: <Key className="h-5 w-5" />,
      name: "Account Verify",
      link: "/verify",
      select: path === "/verify",
    },
    {
      icon: <Settings className="h-5 w-5" />,
      name: "Settings",
      link: "/settings",
      select: path === "/settings",
    },
  ];
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r border-violate bg-violate sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
          {/* <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>
          </Link> */}
          <Link href={"/"}>
            <Image src={"/oldlogo.png"} alt="" width={30} height={30} />
          </Link>
          <TooltipProvider>
            {navgation.map(({ icon, link, name, select }, i) => (
              <Tooltip key={i}>
                <TooltipTrigger asChild>
                  <Link
                    href={link}
                    className={`flex h-9 w-9 items-center justify-center  rounded-lg ${
                      select ? "bg-accent text-card-foreground" : "text-white"
                    } text-accent-foreground transition-colors hover:text-primary md:h-8 md:w-8`}
                  >
                    {icon}
                    <span className="sr-only">{name}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">{name}</TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </nav>
        {/* <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav> */}
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet open={side} onOpenChange={setSide}>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                {/* <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Acme Inc</span>
                </Link> */}
                <Link href={"/"}>
                  <Image src={"/oldlogo.png"} alt="" width={37} height={37} />
                </Link>

                {navgation.map(({ icon, link, name, select }, i) => (
                  <Link
                    key={i}
                    href={link}
                    className={`flex items-center gap-4 px-2.5 ${
                      select ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {icon}
                    {name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={path} className="capitalize">
                    {path.split("/")[1]}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {/* <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#">Orders</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Recent Orders</BreadcrumbPage>
              </BreadcrumbItem> */}
            </BreadcrumbList>
          </Breadcrumb>
          {/* <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
            />
          </div> */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <Image
                  loader={() => "https://unavatar.io/instagram/willsmith"}
                  src="https://unavatar.io/instagram/willsmith"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() =>
                  setUserData({
                    data: null,
                    lgogedIn: false,
                  })
                }
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        {children}
      </div>
    </div>
  );
}
