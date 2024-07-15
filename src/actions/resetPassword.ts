'use server'

import { encrypt } from "@/lib/crypt";
import prisma from "@/util/prismaClient"

export async function resetPassword({ email, password }: { email: string; password: string }) {
    try {

        await prisma.token.delete({ where: { email } })

        await prisma.user.update({
            where: { email },
            data: {
                password: await encrypt(password)
            }
        })

        return true
    } catch (err) {
        return false
    }
}