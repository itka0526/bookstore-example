import prisma from "@/lib/prisma";
import { leftSidePanelWidth } from "./_components/globalCSS";
import { BookList, BookProps } from "./_components/bookSection/BookList";
import SidePanel from "./_components/sidepanel/SidePanel";

export default async function Home() {
    "use server";

    const books: BookProps[] = await prisma.book.findMany({
        select: { title: true, subject: true, Author: { select: { firstName: true, lastName: true } } },
        orderBy: { uploadedAt: "desc" },
    });

    return (
        <div className={`main-layout-container`}>
            <SidePanel currentParams="/" visible={false} />
            <BookList books={books} />
        </div>
    );
}
