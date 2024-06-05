import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import prisma from "@/util/prismaClient"
import { Portfolio } from "@prisma/client"

export function Assets({ data }: { data: Pick<Portfolio, "protables"> }) {

    const tableData: any[] = JSON.parse(data?.protables || "[]")

    return (
        <Table className="w-full">
            <TableHeader className="border rounded-md">
                <TableRow>
                    <TableHead>Crypto</TableHead>
                    <TableHead>Current Price</TableHead>
                    <TableHead>24h Change</TableHead>
                    <TableHead>Market Cap</TableHead>
                    <TableHead>Trading Volume</TableHead>
                    <TableHead className="text-right">Portfolio Allocation</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className="border">
                {tableData.map((invoice) => (
                    <TableRow key={invoice.id}>
                        <TableCell className="font-medium">{invoice.crypto}</TableCell>
                        <TableCell>${invoice.prize}</TableCell>
                        <TableCell className="text-green-600">+{invoice.change}%</TableCell>
                        <TableCell>${invoice.market}</TableCell>
                        <TableCell>${invoice.volume}</TableCell>
                        <TableCell className="text-right">{invoice.allocation}%</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
