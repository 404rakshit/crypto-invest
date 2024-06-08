import { Portfolio } from "@prisma/client";
import { atom } from "jotai";

export const modalState = atom(false)

export const modalData = atom({
    fname: "",
    lname: "",
    email: "",
    username: "",
    docType: "",
    front: "",
    back: "",
    verify: false
})

export const portfolioModalState = atom(false)

export const portfolioData = atom<any>(null)
export const tradeData = atom<any>(null)

export const admin = "invest.cryptoinvestusa@gmail.com"

// rajanubhav829@gmail.com
// cse.tirtha@gmail.com