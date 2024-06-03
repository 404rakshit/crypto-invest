'use client'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {  Euro, HandHelping, Home, Key, LineChart, UserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import Image from "next/image";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { logout } from "@/util/useSession";

export function Sidebar() {

    const path = usePathname();

    const navgation = [
        {
            icon: <Home className="h-5 w-5" />,
            name: "Dashboard",
            link: "/dashboard",
            select: path === "/dashboard",
        },
        {
            icon: <Euro className="h-5 w-5" />,
            name: "Fund Account",
            link: "/fund-account",
            select: path === "/fund-account",
        },
        {
            icon: <HandHelping className="h-5 w-5" />,
            name: "Withdraw Funds",
            link: "/withdraw-funds",
            select: path === "/withdraw-funds",
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
    ];

    return <TooltipProvider>
        {navgation.map(({ icon, link, name, select }, i) => (
            <Tooltip key={i}>
                <TooltipTrigger asChild>
                    <Link
                        href={link}
                        className={`flex h-9 w-9 items-center justify-center rounded-lg ${select ? "bg-accent text-violate" : "text-white"
                            } text-accent-foreground transition-colors sm:hover:text-primary md:h-8 md:w-8`}
                    >
                        {icon}
                        <span className="sr-only">{name}</span>
                    </Link>
                </TooltipTrigger>
                <TooltipContent side="right">{name}</TooltipContent>
            </Tooltip>
        ))}
    </TooltipProvider>
}

export function Header() {

    const path = usePathname();
    const [side, setSide] = React.useState(false);

    React.useEffect(() => {
        setSide(false)
    }, [side])

    return (
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 w-full">
            <Link className="block sm:hidden" href={"/"}>
                <Image src={"/oldlogo.png"} alt="" width={30} height={30} />
            </Link>
            <Breadcrumb className="hidden sm:flex">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href={path} className="capitalize">
                                {path.split("/")[1].split("-").join(" ")}
                            </Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <DropdownMenu>
                <DropdownMenuTrigger asChild className="ml-auto">
                    <Button
                        variant="outline"
                        size="icon"
                        className="overflow-hidden rounded-full"
                    >
                        <UserRound className="h-9 w-9" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    {/* <DropdownMenuSeparator />
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem> */}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => {
                        logout()
                    }}>
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    )
}