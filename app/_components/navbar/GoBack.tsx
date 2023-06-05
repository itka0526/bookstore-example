"use client";

import { ArrowLeft } from "react-feather";
import { usePathname, useRouter } from "next/navigation";

export function GoBack() {
    const router = useRouter();
    const path = usePathname();

    const handleClick = () => {
        router.back();
    };

    return path !== "/" ? (
        <div
            className="flex justify-center items-center hover:bg-slate-100 transition-colors duration-300 rounded-full p-1 cursor-pointer"
            onClick={handleClick}
        >
            <ArrowLeft width={32} height={32} />
        </div>
    ) : (
        <div />
    );
}
