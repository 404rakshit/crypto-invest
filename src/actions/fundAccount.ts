'use server'

import prisma from "@/util/prismaClient"
import { Funds } from "@prisma/client"

export async function fundAccount({ fundData: { amount, currencytype, description, fundType, transactionId, walletAddress, username } }: { fundData: Pick<Funds, "username" | "currencytype" | "amount" | "fundType" | "description" | "transactionId" | "walletAddress"> }) {

    const user = await prisma.user.findUnique({ where: { username } })

    if (!user) return { status: 404, message: "User not found!" }

    const data = await prisma.funds.create({
        data: {
            amount,
            currencytype,
            fundType,
            transactionId,
            walletAddress,
            description,
            username
        }
    })

    return {status: 201, message: "Fund Submmitted Successfully!"}
}