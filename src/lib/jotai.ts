// import { atomWithStorage } from "jotai/utils";

import { atom } from "jotai";

// export const user = atomWithStorage("user", {
//     data: {
//         username: null,
//         fname: null,
//         lname: null,
//         phone: null,
//         email: null
//     },
//     lgogedIn: false
// })

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