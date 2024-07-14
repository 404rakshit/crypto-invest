import { Badge } from "@/components/ui/badge";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import prisma from "@/util/prismaClient";
import React from "react";
import { getSession } from "@/util/useSession";
import { redirect } from "next/navigation";
import { admin } from "@/lib/jotai";

export default async function MessageList() {
    const data = await prisma.contact.findMany();
    const session = await getSession()

    if (session.email !== admin) redirect("/dashboard")

    return (
        <TableBody>
            {data.length > 0 ? (
                <>
                    {data.map(
                        ({ createdAt, phone, name, message, email }, i) => {
                            if (session.email === email) return null
                            return (
                                <TableRow key={i}>
                                    <TableCell>
                                        <div className="font-medium">
                                            {name}
                                        </div>
                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                            {email}
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        {phone}
                                    </TableCell>
                                    <TableCell className="table-cell text-center">
                                        {message}
                                    </TableCell>
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
                    <TableCell className="hidden sm:table-cell text-center">
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
