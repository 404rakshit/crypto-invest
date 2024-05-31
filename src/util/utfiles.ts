'use server'

import { UTApi } from "uploadthing/server";
import { getSession } from "./useSession";

const utapi = new UTApi({
    apiKey: process.env.UPLOADTHING_SECRET,
});

export async function uploadFiles(formData: FormData) {

    const session = await getSession()
    // @ts-ignore
    
    const frontFile: File = formData.get("front-file")
    // @ts-ignore
    const backFile: File = formData.get("back-file")
    if (frontFile === null || backFile === null) return null
    const response = await utapi.uploadFiles([
        frontFile, backFile
    ]);

    return response
}