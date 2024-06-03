'use client'

import { Button } from '@/components/ui/button'
import { modalData, modalState } from '@/lib/jotai'
import { useAtom } from 'jotai'
import React from 'react'
import { Modal } from './modal'
import { Pencil } from 'lucide-react'

export default function ClientButton({ data: { fname, lname, email, username, docType, back, front, verified } }: { data: { fname: string, lname: string, email: string, username: string, docType: string, back: string, front: string, verified: boolean } }) {

    const [state, setState] = useAtom(modalState)
    const [user, setUser] = useAtom(modalData)

    return (
        <Button size={"icon"} className='rounded-full' onClick={() => { setState(true), setUser({ fname, lname, email, username, docType, back, front, verify: verified }) }}><Pencil className='h-4 w-4' /></Button>
    )
}
