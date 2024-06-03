import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Suspense } from "react";
import UserList from "./user-list";
// import { Modal } from "./modal";
import { getSession } from "@/util/useSession";
import { redirect } from "next/navigation";

export default async function Dashboard() {

    const session = await getSession()
    // if (!(session.email === "cse.tirtha@gmail.com")) redirect("/dashboard")

    return (
        <main className="grid flex-1 items-start gap-4 p-4 px-6 md:gap-8 lg:grid-cols-3 xl:grid-cols-3 min-h-screen bg-muted/40">
            <Card className="col-span-3">
                <CardHeader className="px-7">
                    <CardTitle>Manage Fund Requests</CardTitle>
                    <CardDescription>All the fund requests created by users.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>User</TableHead>
                                <TableHead>Fund Type</TableHead>
                                <TableHead>Username</TableHead>
                                <TableHead className="text-center">Currency Type</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead className="text-right">Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <Suspense fallback={DummyTable()}>
                            <UserList />
                        </Suspense>
                    </Table>
                </CardContent>
            </Card>
            {/* <Modal /> */}
        </main>
    );
}

function DummyTable(): React.ReactNode {
    return (
        <TableBody>
            {Array(5)
                .fill(1)
                .map((_, i) => (
                    <TableRow key={i}>
                        <TableCell>
                            <Skeleton className="h-10 rounded-md w-20" />
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                            <Skeleton className="h-10 rounded-md w-20" />
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                            <Skeleton className="h-10 rounded-md w-20" />
                        </TableCell>
                        <TableCell className="sm:table-cell float-right">
                            <Skeleton className="h-10 rounded-md w-20" />
                        </TableCell>
                    </TableRow>
                ))}
        </TableBody>
    );
}
