"use client";

import { Subject } from "@prisma/client";
import Link from "next/link";

export default function SidePanel({ currentParams, visible = false }: { currentParams: Subject | "/"; visible: boolean }) {
    const subjects = fetchBookCategories();

    return (
        <aside className={`bg-white ${visible === false ? "side-panel-container" : ""}`}>
            <ul className="my-1">
                {subjects.map((subject, idx) => (
                    <Link href={"/subject/" + subject.toLocaleLowerCase()} key={`${subject}-${idx}`}>
                        <li
                            className={`text-lg px-2 rounded-md pl-[5%] mx-2 ${
                                currentParams.toLocaleUpperCase() === subject.toLocaleUpperCase() ? " bg-slate-100 " : ""
                            }`}
                        >
                            {subject}
                        </li>
                    </Link>
                ))}
            </ul>
        </aside>
    );
}

const fetchBookCategories = () => Object.keys(Subject).map((subject) => subject.toLocaleUpperCase().charAt(0) + subject.toLocaleLowerCase().slice(1));
