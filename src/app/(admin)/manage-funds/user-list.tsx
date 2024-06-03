import { Badge } from "@/components/ui/badge";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import prisma from "@/util/prismaClient";
import React from "react";
import { getSession } from "@/util/useSession";
import { redirect } from "next/navigation";
import { admin } from "@/lib/jotai";

export default async function UserList() {
    const data = await prisma.funds.findMany({
        include: {
            user: {
                select: {
                    username: true,
                    email: true,
                    fname: true,
                    lname: true,
                }
            }
        }
    });
    const session = await getSession()

    if (session.email !== admin) redirect("/dashboard")

    return (
        <TableBody>
            {data.length > 0 ? (
                <>
                    {data.map(
                        ({ user: { fname, lname, email, username, }, amount, createdAt, currencytype, fundType }, i) => {
                            if (session.email === email) return null
                            return (
                                <TableRow key={i}>
                                    <TableCell>
                                        <div className="font-medium">
                                            {fname} {lname}
                                        </div>
                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                            {email}
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        <Badge
                                            className="text-xs w-fit max-w-28 line-clamp-1 uppercase"
                                        >
                                            {fundType}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        <Badge
                                            className="text-xs w-fit max-w-28 line-clamp-1"
                                            variant="outline"
                                        >
                                            {username}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell uppercase text-center">{currencytype}</TableCell>
                                    <TableCell className="hidden sm:table-cell">${amount}</TableCell>
                                    <TableCell className="text-right">{(new Date(createdAt)).toLocaleDateString()}</TableCell>
                                </TableRow>
                            )
                        }
                    )}
                </>
            ) : (
                <TableRow>
                    <TableCell>
                        <Badge variant={"secondary"}>No Data</Badge>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                        <Badge variant={"secondary"}>No Data</Badge>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                        <Badge variant={"secondary"}>No Data</Badge>
                    </TableCell>
                    <TableCell className="sm:table-cell text-right">
                        <Badge variant={"secondary"}>No Data</Badge>
                    </TableCell>
                </TableRow>
            )}
        </TableBody>
    );
}
