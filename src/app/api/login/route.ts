import { decrypt, encrypt } from "@/lib/crypt";
import prisma from "@/util/prismaClient";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {

        const { username, password } = await req.json();

        const post = await prisma.user.findFirst({
            where: {
                OR: [
                    {
                    username
                },
                {
                    email: username
                }
                ]
            },
        });

        if (!post) throw { status: 404, message: "User not found" }

        if (!(await decrypt(password, post?.password))) throw { status: 404, message: "Wrong Password!" }

        return NextResponse.json({ post, user: true }, { status: 201 });
    } catch (err: any) {
        // console.log(err);
        return NextResponse.json(err.message || err || "Database Error", { status: err.status || 500 });
    }
}
