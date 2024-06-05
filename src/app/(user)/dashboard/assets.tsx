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

export function Assets({ data }: { data: Pick<Portfolio, "protables" | "investment"> }) {

    const tableData: any[] = JSON.parse(data?.protables || "[]")

    function roundeUp(num: number) {
        return Math.floor(num * 100) / 100
    }

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
                        <TableCell>${roundeUp(invoice.market / invoice.prize)}</TableCell>
                        <TableCell className="text-right">{roundeUp((data.investment /invoice.prize) * 100)}%</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
