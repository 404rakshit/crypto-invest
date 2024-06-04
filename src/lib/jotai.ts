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

export const admin = "rajanubhav829@gmail.com"