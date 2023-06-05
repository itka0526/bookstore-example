"use client";
import { FormStatus, experimental_useFormStatus as useFormStatus } from "react-dom";

export const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
        <div className="w-full flex justify-center items-center">
            <button type="submit" className="my-2 text-lg">
                {pending ? "Uploading..." : "Upload"}
            </button>
        </div>
    );
};
