'use client'

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { portfolioData, portfolioModalState, tradeData } from "@/lib/jotai"
import { useAtom } from "jotai"
import { CircleX, PlusCircle } from "lucide-react"
import { useEffect, useState } from "react"
import { toast } from "sonner"

export function PortfolioModal() {
    const [open, setOpen] = useAtom(portfolioModalState)
    const [portfolio, setPortfolio] = useAtom(portfolioData)
    const [trade, setTrade] = useAtom(tradeData)

    const pasreData = portfolio?.protables ? JSON.parse(portfolio.protables) : JSON.parse('[]')
    const parseTradeData = !!trade ? JSON.parse(trade) : JSON.parse('[]')

    useEffect(() => {
        const pasreData = portfolio?.protables ? JSON.parse(portfolio.protables) : JSON.parse('[]')
        setTemp(pasreData)
        const newparseTradeData = trade ? JSON.parse(trade) : JSON.parse('[]')
        setTempTrade(newparseTradeData)
    }, [portfolio])

    const [loading, setLoading] = useState(false)

    const [temp, setTemp] = useState<any[]>(pasreData)
    const [tempTrade, setTempTrade] = useState<any[]>(parseTradeData)

    const editCrypto = (property: string, index: number) => {
        const updatedItems = [...temp];
        updatedItems[index] = { ...updatedItems[index], crypto: property };
        setTemp(updatedItems);
    };

    const editPrice = (property: string, index: number) => {
        const updatedItems = [...temp];
        updatedItems[index] = { ...updatedItems[index], prize: property };
        setTemp(updatedItems);
    };

    const editChange = (property: string, index: number) => {
        const updatedItems = [...temp];
        updatedItems[index] = { ...updatedItems[index], change: property };
        setTemp(updatedItems);
    };

    const editMarket = (property: string, index: number) => {
        const updatedItems = [...temp];
        updatedItems[index] = { ...updatedItems[index], market: property };
        setTemp(updatedItems);
    };

    const editVolume = (property: string, index: number) => {
        const updatedItems = [...temp];
        updatedItems[index] = { ...updatedItems[index], volume: property };
        setTemp(updatedItems);
    };

    const editAllocation = (property: string, index: number) => {
        const updatedItems = [...temp];
        updatedItems[index] = { ...updatedItems[index], allocation: property };
        setTemp(updatedItems);
    };

    const editStatus = (property: string, index: number) => {
        const updatedItems = [...tempTrade];
        updatedItems[index] = { ...updatedItems[index], status: property };
        setTempTrade(updatedItems);
    };

    const editAsset = (property: string, index: number) => {
        const updatedItems = [...tempTrade];
        updatedItems[index] = { ...updatedItems[index], asset: property };
        setTempTrade(updatedItems);
    };

    const editAmount = (property: string, index: number) => {
        const updatedItems = [...tempTrade];
        updatedItems[index] = { ...updatedItems[index], amount: property };
        setTempTrade(updatedItems);
    };

    const editDate = (property: string, index: number) => {
        const updatedItems = [...tempTrade];
        updatedItems[index] = { ...updatedItems[index], date: property };
        setTempTrade(updatedItems);
    };

    async function updatePortfolio() {
        setLoading(true)
        const res = await fetch("/api/updatePortfolio", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...portfolio, protables: JSON.stringify(temp), trade: JSON.stringify(tempTrade)
            })
        })

        // console.log(res);

        toast.success("User Updated Successfully!", {
            description: "Portfolio and Trade are updated."
        })

        setLoading(false)
    }

    function roundeUp(num: number) {
        return Math.floor(num * 100) / 100
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[1025px]">
                <DialogHeader>
                    <DialogTitle>User&apos;s Portfolio</DialogTitle>
                    <DialogDescription>
                        Make changes to user&apos;s portfolio here.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-2">
                    <div className="grid grid-cols-2 gap-2">
                        <span className="flex gap-2 items-center">Total Portfolio Value <Input type="number" value={portfolio?.total || 0} onChange={(e) => setPortfolio({ ...portfolio, total: e.target.value })} /></span>
                        <span className="flex gap-2 items-center">Investment <Input type="number" value={portfolio?.investment || 0} onChange={(e) => setPortfolio({ ...portfolio, investment: e.target.value })} /></span>
                        <span className="flex gap-2 items-center">Portfolio Change(24H) <Input type="number" value={portfolio?.change || 0} onChange={(e) => setPortfolio({ ...portfolio, change: e.target.value })} /></span>
                        <span className="flex gap-2 items-center">Portfolio Allocation <Input type="number" value={portfolio?.allocation || 0} onChange={(e) => setPortfolio({ ...portfolio, allocation: e.target.value })} /></span>
                    </div>
                    <Tabs defaultValue="portfolio">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                            <TabsTrigger value="trade">Trade</TabsTrigger>
                        </TabsList>
                        <TabsContent value="portfolio" className="flex flex-col gap-2 pt-5">
                            <div className="flex justify-between w-full">
                                <span className="capitalize">crypto</span>
                                <span className="capitalize">price</span>
                                <span className="capitalize">change</span>
                                <span className="capitalize">market</span>
                                <span className="capitalize">volume</span>
                                <span className="capitalize">allocation</span>
                            </div>
                            {temp.length > 0 ? temp.map(({ allocation, change, crypto, market, prize, volume }, i) => (
                                <div key={i} className="flex justify-between gap-2">
                                    <Input value={crypto} onChange={e => editCrypto(e.target.value, i)} />
                                    <Input type="number" value={prize} onChange={e => editPrice(e.target.value, i)} />
                                    <Input type="number" value={change} onChange={e => editChange(e.target.value, i)} />
                                    <Input type="number" value={market} onChange={e => editMarket(e.target.value, i)} />
                                    <Input disabled type="number" value={roundeUp(market / prize)} onChange={e => editVolume(e.target.value, i)} />
                                    <Input disabled type="number" value={roundeUp((portfolio?.investment / prize) * 100)} onChange={e => editAllocation(e.target.value, i)} />
                                    <Button variant={"outline"} className="px-2" onClick={() => setTemp(temp.filter((e, index) => index !== i))} size={"icon"}><CircleX className="h-5 w-5 text-red-700" /></Button>
                                </div>
                            )) : <div className="m-auto py-4 text-muted-foreground">No Data Available</div>}
                            <div className="flex gap-2 self-end py-3">
                                <Button onClick={updatePortfolio} disabled={loading}>{loading ? "Saving..." : "Save Changes"}</Button>
                                <Button onClick={() => setTemp([...temp, {
                                    crypto: "Bitcoin BTC",
                                    prize: "0",
                                    change: "0",
                                    market: "0",
                                    volume: "0",
                                    allocation: "0",
                                }])} size={"icon"}><PlusCircle className="h-5 w-5" /></Button>
                            </div>
                        </TabsContent>
                        <TabsContent value="trade" className="flex flex-col gap-2">
                            <div className="flex justify-between w-full">
                                <span className="capitalize">Status</span>
                                <span className="capitalize">Asset</span>
                                <span className="capitalize">Amount</span>
                                <span className="capitalize">Date</span>
                            </div>
                            {tempTrade?.length > 0 ? tempTrade?.map(({ status, asset, amount, date }, i) => (
                                <div key={i} className="flex justify-between gap-2">
                                    {/* <Select type="number" value={change} onChange={e => editChange(e.target.value, i)} /> */}
                                    <Select defaultValue={status} onValueChange={e => editStatus(e, i)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Status</SelectLabel>
                                                <SelectItem value="won">Won</SelectItem>
                                                <SelectItem value="loss">Loss</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <Input value={asset} onChange={e => editAsset(e.target.value, i)} />
                                    <Input type="number" value={amount} onChange={e => editAmount(e.target.value, i)} />
                                    <Input value={date} onChange={e => editDate(e.target.value, i)} />
                                    <Button variant={"outline"} className="px-2" onClick={() => setTemp(tempTrade.filter((e, index) => index !== i))} size={"icon"}><CircleX className="h-5 w-5 text-red-700" /></Button>
                                </div>
                            )) : <div className="m-auto py-4 text-muted-foreground">No Data Available</div>}
                            <div className="flex gap-2 self-end py-3">
                                <Button onClick={updatePortfolio} disabled={loading}>{loading ? "Saving..." : "Save Changes"}</Button>
                                <Button onClick={() => setTempTrade([...tempTrade, {
                                    status: "won",
                                    asset: 0,
                                    amount: 0,
                                    date: 0
                                }])} size={"icon"}><PlusCircle className="h-5 w-5" /></Button>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </DialogContent>
        </Dialog>
    )
}
