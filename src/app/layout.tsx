import { ConvexClientProvider } from "@/providers/ConvexClientProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";


const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

export const metadata: Metadata = {
    title: "Careers",
    description: "one stop solutions for your career problems",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body
                className={`${inter.variable} font-sans antialiased bg-neutral-950 text-white`}
            >
                <ConvexClientProvider >
                    {children}
                    <Toaster />
                </ConvexClientProvider>
            </body>
        </html>
    );
}
