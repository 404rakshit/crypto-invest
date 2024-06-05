'use client'

import { Button } from '@/components/ui/button'
import { modalData, modalState, portfolioModalState, portfolioData, tradeData } from '@/lib/jotai'
import { useAtom } from 'jotai'
import React from 'react'
import { Modal } from './modal'
import { AlignEndHorizontal, Pencil } from 'lucide-react'
import { Portfolio } from '@prisma/client'

export function ClientButton({ data: { fname, lname, email, username, docType, back, front, verified } }: { data: { fname: string, lname: string, email: string, username: string, docType: string, back: string, front: string, verified: boolean } }) {

    const [state, setState] = useAtom(modalState)
    const [user, setUser] = useAtom(modalData)

    return (
        <Button size={"icon"} className='rounded-full' onClick={() => { setState(true), setUser({ fname, lname, email, username, docType, back, front, verify: verified }) }}><Pencil className='h-4 w-4' /></Button>
    )
}

export function PortfolioButton({ data: { userPortfolio, userTrade } }: { data: { userPortfolio: Portfolio, userTrade: string } }) {

    const [state, setState] = useAtom(portfolioModalState)
    const [portfolio, setPortfolio] = useAtom(portfolioData)
    const [trade, setTrade] = useAtom(tradeData)

    return (
        <Button size={"icon"} className='rounded-full bg-sky-600 hover:bg-sky-700 text-white' onClick={() => { setState(true), setPortfolio(userPortfolio), setTrade(userTrade);
         }}><AlignEndHorizontal className='h-4 w-4' /></Button>
    )
}
