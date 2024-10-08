import { encrypt } from "@/lib/crypt";
import prisma from "@/util/prismaClient";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const users = await prisma.user.findMany();

        return NextResponse.json(users, { status: 201 });
    } catch (err: any) {
        // console.log(err);
        return NextResponse.json(err.message || err || "Database Error", { status: err.status || 500 });
    }
}

export async function POST(req: Request) {
    try {

        const { email, fname, lname, phone, username, password } = await req.json();

        const post = await prisma.user.create({
            data: {
                email,
                fname,
                lname,
                phone,
                username,
                password: await encrypt(password)
            }
        });

        await prisma.portfolio.create({
            data: {
                username: post.username,
            }
        })

        revalidatePath("/admin")

        return NextResponse.json({ post, user: true }, { status: 201 });
    } catch (err: any) {
        // console.log(err.meta);
        if (err.code == "P2002") {
            if (err.meta.target == "User_username_key") return NextResponse.json("Username already exsits", { status: err.status || 403 });
            if (err.meta.target == "User_email_key") return NextResponse.json("Email already exsits", { status: err.status || 403 });
        }
        return NextResponse.json(err.message || err || "Database Error", { status: err.status || 500 });
    }
}
