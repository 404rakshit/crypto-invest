import { Badge } from "@/components/ui/badge";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import prisma from "@/util/prismaClient";
import { User } from "@prisma/client";
import React from "react";

async function getUser(): Promise<User[]> {
  const data = await prisma.user.findMany();
  return data;
}

export default async function UserList() {
  const data = await getUser();

  return (
    <TableBody>
      {data.length > 0 ? (
        <>
          {data.map(
            ({ fname, lname, email, createdAt, phone, username, docType, back, front }, i) => (
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
                <TableCell className="text-right text-white text-xs uppercase">
                  {!docType ? <span className="px-2 py-1 rounded-md bg-red-600">No Uploads</span> : <span className="px-2 py-1 rounded-md bg-green-700">{docType}</span> }
                </TableCell>
              </TableRow>
            )
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
