import { Metadata } from "next";
import { navHeight } from "./_components/globalCSS";
import Navbar from "./_components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Bookstore made by Itgelt",
    description: "This website was made by single developer using NextJS 13.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-M83Y5QRWP9`} />

            <Script strategy="lazyOnload" id="google-analytics">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-M83Y5QRWP9', {
                        page_path: window.location.pathname,
                    });
                    `}
            </Script>

            <body className={inter.className}>
                <main className={`relative flex min-h-screen flex-col p-24 max-md:p-12`} style={{ paddingTop: `calc(${navHeight} + 1rem)` }}>
                    <Navbar />
                    <section className=" flex h-full w-full grow ">{children}</section>
                </main>
            </body>
        </html>
    );
}
