"use client";

import { Author, Book } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";
import { Grid, List } from "react-feather";

type ToggleModes = "grid" | "list";

export function BookList({ books }: { books: BookProps[] }) {
    const [toggleMode, setToggleMode] = useState<ToggleModes>("grid");

    const handleToggle = (mode: ToggleModes) => {
        setToggleMode(mode);
    };

    return (
        <div className={`flex flex-wrap w-full`}>
            <div className="w-full flex justify-end gap-2 items-center px-2 my-2 ">
                <div
                    className={`cursor-pointer rounded-full p-2 ${toggleMode === "list" ? "bg-slate-100" : ""}`}
                    onClick={() => handleToggle("list")}
                >
                    <List />
                </div>
                <div
                    className={`cursor-pointer rounded-full p-2 ${toggleMode === "grid" ? "bg-slate-100" : ""}`}
                    onClick={() => handleToggle("grid")}
                >
                    <Grid />
                </div>
            </div>
            {books.map((book) => (
                <BookPreview {...book} toggleMode={toggleMode} key={"book-" + book.title} />
            ))}
        </div>
    );
}

export type BookProps = Pick<Book, "subject" | "title"> & { Author: Pick<Author, "firstName" | "lastName"> };

function BookPreview({ subject, title, Author: { firstName, lastName }, toggleMode }: BookProps & { toggleMode: ToggleModes }) {
    return (
        <div
            className={`gap-2 p-4 grow-0 shrink-0 border border-400  ${
                toggleMode === "list" ? "basis-full my-1 grid grid-cols-[4rem,1fr]" : "flex basis-1/3 flex-col aspect-[7/8] justify-between"
            }`}
        >
            <div className={`border ${toggleMode === "list" ? "" : "grow"} overflow-hidden max-w-full relative`}>
                <Image
                    priority={true}
                    sizes="(max-width: 768px) 100vw"
                    src={"/404.png"}
                    fill
                    style={{ objectFit: "contain", width: "100%" }}
                    alt="'Image not found' found..."
                />
            </div>
            <div className={`lg:text-base md:text-sm ${toggleMode === "list" ? "flex justify-between" : ""}`}>
                <div className="">
                    <span className="">
                        {title} by {firstName} {lastName}{" "}
                    </span>
                </div>
                <div className={`${toggleMode === "list"}`}>
                    <span>({subject})</span>
                </div>
            </div>
        </div>
    );
}
