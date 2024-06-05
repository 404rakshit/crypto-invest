import { Badge } from "@/components/ui/badge";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import prisma from "@/util/prismaClient";
import { User } from "@prisma/client";
import React from "react";
import { ClientButton, PortfolioButton } from "./btns";
import { getSession } from "@/util/useSession";
import { redirect } from "next/navigation";
import { admin } from "@/lib/jotai";

export default async function UserList() {
  const data = await prisma.user.findMany({
    include: {
      Portfolio: true,
    }
  });
  const session = await getSession()

  if (session.email !== admin) redirect("/dashboard")

  return (
    <TableBody>
      {data.length > 0 ? (
        <>
          {data.map(
            ({ fname, lname, email, username, createdAt, phone, docType, back, front, verified, Portfolio, trade }, i) => {
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
                  <TableCell className="hidden sm:table-cell">{phone}</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge
                      className="text-xs w-fit max-w-28 line-clamp-1"
                      variant="secondary"
                    >
                      {username}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right text-white text-xs uppercase items-center flex gap-2 justify-end">
                    {!docType ? <span className="px-2 py-1 rounded-md bg-red-600">No Uploads</span> : <span className="px-2 py-1 rounded-md bg-green-700">{docType}</span>}
                    <ClientButton data={{ fname, lname: lname ?? "", email, username, docType: docType ?? "", back: back ?? "", front: front ?? "", verified: verified }} />
                    <PortfolioButton data={{ userPortfolio: Portfolio!, userTrade: trade }} />
                  </TableCell>
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
