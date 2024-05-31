'use server'

import { UTApi } from "uploadthing/server";

const utapi = new UTApi({
    apiKey: process.env.UPLOADTHING_SECRET,
});

export async function uploadFiles(formData: FormData) {

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

export async function deleteFiles(data: string[]) {
    const res = await utapi.deleteFiles(data);
    return res.success
}