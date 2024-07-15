import { decrypt, encrypt } from "@/lib/crypt";
import prisma from "@/util/prismaClient";
import { NextRequest, NextResponse } from "next/server";
import { } from "jose"
import { signToken, verifyToken } from "@/util/jwtutil";

export async function GET(req: NextRequest) {
    try {

        const { searchParams } = new URL(req.url)
        const token = searchParams.get('token')

        if (!token) throw { status: 404, message: "Please provide a token" }

        const payload = await verifyToken(token)

        return NextResponse.json({ payload }, { status: 201 });
    } catch (err: any) {
        // console.log(err);
        return NextResponse.json({ message: err.message || err || "Database Error" }, { status: err.status || 500 });
    }
}

export async function POST(req: Request) {
    try {
        const { email } = await req.json()

        if (!email) throw { status: 404, message: "Please Provide Email" }

        const token = await signToken({
            name: "Tony Sir",
            email: "tony.sir1975@gmail.com"
        })

        // const userToken = await prisma.token.upsert({
        //     create: {
        //         email: ""
        //     },
        //     where: {
        //         email
        //     }
        // })

        return NextResponse.json({ token }, { status: 201 });
    } catch (err: any) {
        // console.log(err);
        return NextResponse.json(err.message || err || "Database Error", { status: err.status || 500 });
    }
}