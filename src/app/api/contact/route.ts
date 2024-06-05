import prisma from "@/util/prismaClient";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { email, phone, name, message, } = await req.json();

        const post = await prisma.contact.create({
            data: {
                email,
                phone,
                name,
                message,
            }
        });

        return NextResponse.json("Form Submitted, We will contact you soon.", { status: 201 });
    } catch (err: any) {
        // console.log(err);
        return NextResponse.json(err.message || err || "Database Error", { status: err.status || 500 });
    }
}
