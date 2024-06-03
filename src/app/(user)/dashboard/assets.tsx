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

const invoices = [
    {
        id: 101,
        crypto: "Bitcoin BTC",
        price: 100000,
        change: 8,
        market: 438,
        volume: 387,
        protfolio: 43
    },
    {
        id: 102,
        crypto: "Ethereum ETH",
        price: 30000,
        change: 4,
        market: 438,
        volume: 387,
        protfolio: 43
    },
    {
        id: 103,
        crypto: "Ripple XRP",
        price: 1000,
        change: 5,
        market: 438,
        volume: 387,
        protfolio: 43
    },
    {
        id: 104,
        crypto: "Litecoin LTC",
        price: 50000,
        change: 3,
        market: 438,
        volume: 387,
        protfolio: 10
    },
]

export function Assets() {
    return (
        <Table className="w-full">
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
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
                {invoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                        <TableCell className="font-medium">{invoice.crypto}</TableCell>
                        <TableCell>${invoice.price}</TableCell>
                        <TableCell>+{invoice.change}%</TableCell>
                        <TableCell>${invoice.market}B</TableCell>
                        <TableCell>${invoice.volume}M</TableCell>
                        <TableCell className="text-right">{invoice.protfolio}%</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            {/* <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
            </TableFooter> */}
        </Table>
    )
}
