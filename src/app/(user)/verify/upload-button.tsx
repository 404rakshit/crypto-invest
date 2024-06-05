"use client";
 
import { UploadButton } from "@/util/uploadthings";

export default function UploadFIle() {
    return <UploadButton className="mt-4 ut-button:bg-red-500 ut-button:ut-readying:bg-red-500/50"
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
            // Do something with the response
            // console.log("Files: ", res);
            alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
        }}
    />
} 