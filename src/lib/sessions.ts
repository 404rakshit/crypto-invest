import { SessionOptions } from "iron-session"

export type SessionData = {
    userId?: number,
    username?: string,
    email?: string,
    name?: string,
    fileUploaded?: boolean 
    isLoggedin: boolean
    verified: boolean
}


export const defaultSession: SessionData = {
    isLoggedin: false,
    verified: false
}


export const sessionOption: SessionOptions = {
    password: process.env.SECRET!,
    cookieName: "chorma-crypt",
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production"
    }
}