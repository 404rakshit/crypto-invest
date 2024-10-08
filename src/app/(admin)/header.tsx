'use client'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { BadgeDollarSign, CircleUserIcon, Euro, HandHelping, Home, Key, LineChart, MessageSquareText, UserRound } from "lucide-react";
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
            icon: <CircleUserIcon className="h-5 w-5" />,
            name: "Admin",
            link: "/admin",
            select: path === "/admin",
        },
        {
            icon: <BadgeDollarSign className="h-5 w-5" />,
            name: "Manage Funds",
            link: "/manage-funds",
            select: path === "/manage-funds",
        },
        {
            icon: <MessageSquareText className="h-5 w-5" />,
            name: "Messages",
            link: "/messages",
            select: path === "/messages",
        }
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