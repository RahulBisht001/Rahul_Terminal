import {Josefin_Sans, Lexend, Overpass} from "next/font/google";
import "./globals.css";

const lexend = Lexend({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-Lexend",
});

const josefin = Josefin_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-Josefin",
});

export const metadata = {
    title: "TerminalByRahul",
    description: "Rahul's Portfolio in the form of a Terminal",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body className={`${lexend.variable} ${josefin.variable}`}>{children}</body>
        </html>
    );
}
