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
import { Input } from "@/components/ui/input"
import { modalData, portfolioData, portfolioModalState } from "@/lib/jotai"
import { getFiles } from "@/util/utfiles"
import { useAtom } from "jotai"
import { CircleX, PlusCircle } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function PortfolioModal() {
    const [open, setOpen] = useAtom(portfolioModalState)
    const [portfolio, setPortfolio] = useAtom(portfolioData)

    const pasreData = portfolio?.protables ? JSON.parse(portfolio.protables) : JSON.parse('[]')

    useEffect(() => {
        const pasreData = portfolio?.protables ? JSON.parse(portfolio.protables) : JSON.parse('[]')
        setTemp(pasreData)
    }, [portfolio])

    const [loading, setLoading] = useState(false)

    const [temp, setTemp] = useState<any[]>(pasreData)

    const editCrypto = (property: string, index: number) => {
        const updatedItems = [...temp];
        updatedItems[index] = { ...updatedItems[index], crypto: property };
        setTemp(updatedItems);
    };

    const editPrice = (property: string, index: number) => {
        const updatedItems = [...temp];
        updatedItems[index] = { ...updatedItems[index], price: property };
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

    async function updatePortfolio() {
        setLoading(true)
        const res = await fetch("/api/updatePortfolio", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...portfolio, protables: JSON.stringify(temp)
            })
        })

        console.log(res);

        setLoading(false)
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
                    <div className="flex justify-between w-full">
                        <span className="capitalize">crypto</span>
                        <span className="capitalize">price</span>
                        <span className="capitalize">change</span>
                        <span className="capitalize">market</span>
                        <span className="capitalize">volume</span>
                        <span className="capitalize">allocation</span>
                    </div>
                    {temp.length > 0 ? temp.map(({ allocation, change, crypto, market, price, volume }, i) => (
                        <div key={i} className="flex justify-between gap-2">
                            <Input value={crypto} onChange={e => editCrypto(e.target.value, i)} />
                            <Input type="number" value={price} onChange={e => editPrice(e.target.value, i)} />
                            <Input type="number" value={change} onChange={e => editChange(e.target.value, i)} />
                            <Input type="number" value={market} onChange={e => editMarket(e.target.value, i)} />
                            <Input type="number" value={volume} onChange={e => editVolume(e.target.value, i)} />
                            <Input type="number" value={allocation} onChange={e => editAllocation(e.target.value, i)} />
                            <Button variant={"outline"} className="px-2" onClick={() => setTemp(temp.filter((e, index) => index !== i))} size={"icon"}><CircleX className="h-5 w-5 text-red-700" /></Button>
                        </div>
                    )) : <div className="m-auto py-4 text-muted-foreground">No Data Available</div>}
                    <div className="flex gap-2 self-end py-3">
                        <Button onClick={updatePortfolio} disabled={loading}>{loading ? "Saving..." : "Save Changes"}</Button>
                        <Button onClick={() => setTemp([...temp, {
                            crypto: "Bitcoin BTC",
                            price: "0",
                            change: "0",
                            market: "0",
                            volume: "0",
                            allocation: "0",
                        }])} size={"icon"}><PlusCircle className="h-5 w-5" /></Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
