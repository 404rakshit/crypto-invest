import { compare, hash } from "bcrypt"

export async function encrypt(pass: string) {
    return await hash(pass, 14)
}

export async function decrypt(pass: string, oldPass: string) {
    return await compare(pass, oldPass)
}