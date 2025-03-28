import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "../context/LanguageContext";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Aida QA Portfolio",
    description: "Portfolio of Aida - QA Automation Engineer",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-white`}
        >
        <LanguageProvider>{children}</LanguageProvider>
        </body>
        </html>
    );
}
