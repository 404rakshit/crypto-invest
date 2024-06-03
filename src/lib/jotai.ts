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

export const admin = "asingh911339@gmail.com"