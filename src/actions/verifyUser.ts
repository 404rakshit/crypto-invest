'use server'

import prisma from "@/util/prismaClient"
import { revalidatePath } from "next/cache"

export async function verifyUser({ id, verify }: { id: string, verify: boolean }) {
    const data = await prisma.user.update({
        where: {
            username: id
        },
        data:{
            verified: verify
        }
    })

    revalidatePath("/admin")

    return data.verified
}