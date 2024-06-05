import { Badge } from "@/components/ui/badge"
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
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

export default function TableDemo({ userData }: { userData: string }) {
  const data: any[] = JSON.parse(userData ?? [])
  return (
    <Table>
      <TableCaption>All your trade history are being recorded.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[80px]">Status</TableHead>
          <TableHead>Asset</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead className="text-right">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.length > 0 ? data.map(({ status, asset, amount, date }, i) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{ status === "won" ? <Badge className="bg-green-800 text-white uppercase">{status}</Badge> : <Badge className="bg-red-800 text-white uppercase">{status}</Badge>}</TableCell>
            <TableCell>{asset}</TableCell>
            <TableCell>${amount}</TableCell>
            <TableCell className="text-right">{date}</TableCell>
          </TableRow>
        )) : <div className="m-auto py-4 text-muted-foreground">No Data Available</div>}
      </TableBody>
    </Table>
  )
}
