"use client";
import { FormStatus, experimental_useFormStatus as useFormStatus } from "react-dom";

export const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
        <div className="w-full ">
            <button type="submit" className="my-2 text-lg hover:bg-slate-100 transition-colors duration-300 rounded-md px-4 py-1">
                {pending ? "Uploading..." : "Upload"}
            </button>
        </div>
    );
};
