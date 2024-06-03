import prisma from "@/util/prismaClient";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {

        const { amount, currencytype, description, fundType, transactionId, walletAddress, username } = await req.json();

        const user = await prisma.user.findFirst({ where: { username } })

        if (!user?.username) throw { status: 404, message: "User not found!" }

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

        return NextResponse.json({ data, user: true }, { status: 201 });
    } catch (err: any) {
        console.log(err);
        return NextResponse.json({ message: err.message || err || "Database Error" }, { status: err.status || 500 });
    }
}
