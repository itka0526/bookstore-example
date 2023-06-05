import { navHeight } from "./_components/globalCSS";
import Navbar from "./_components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Bookstore made by Itgelt",
    description: "This website was made by single developer using NextJS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className={`relative flex min-h-screen flex-col p-24 max-md:p-12`} style={{ paddingTop: `calc(${navHeight} + 1rem)` }}>
                    <Navbar />
                    <section className=" flex h-full w-full grow ">{children}</section>
                </main>
            </body>
        </html>
    );
}
