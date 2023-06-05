import { BookList, BookProps } from "@/app/_components/bookSection/BookList";
import { leftSidePanelWidth } from "@/app/_components/globalCSS";
import SidePanel from "@/app/_components/sidepanel/SidePanel";
import prisma from "@/lib/prisma";
import { Subject } from "@prisma/client";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
    "use server";

    let unknownGenre = params.slug.toLocaleUpperCase() as string;

    if (!Object.keys(Subject).includes(unknownGenre)) {
        notFound();
    }

    let typeCheckedGenre = unknownGenre as Subject;

    const books: BookProps[] = await prisma.book.findMany({
        select: { title: true, subject: true, Author: { select: { firstName: true, lastName: true } } },
        where: {
            subject: typeCheckedGenre,
        },
        orderBy: { uploadedAt: "desc" },
    });

    return (
        <div className={`main-layout-container`}>
            <SidePanel currentParams={typeCheckedGenre} visible={false} />
            <BookList books={books} />
        </div>
    );
}
