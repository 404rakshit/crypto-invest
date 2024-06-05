import { encrypt } from "@/lib/crypt";
import prisma from "@/util/prismaClient";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {

        const { username, total, investment, change, allocation, protables, trade } = await req.json();

        const portfolio = await prisma.user.update({
            where: {
                username
            }, data: {
                Portfolio: {
                    update: {
                        allocation: +allocation,
                        change: +change,
                        investment: +investment,
                        total: +total,
                        protables,
                    }
                },
                trade
            }
        })

        revalidatePath("/admin")

        return NextResponse.json({ portfolio, user: true }, { status: 201 });
    } catch (err: any) {
        // console.log(err);
        return NextResponse.json(err.message || err || "Database Error", { status: err.status || 500 });
    }
}
