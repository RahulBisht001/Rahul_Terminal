import {Josefin_Sans, Afacad} from "next/font/google";
import "./globals.css";

const afacad = Afacad({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-Afacad",
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
            <script
                defer
                data-domain="terminalbyrahul.vercel.app"
                src="https://localhost:3000/tracking-script.js"
            ></script>
            // this is the analytiX tracking script for your app.
            <body className={`${afacad.variable} ${josefin.variable}`}>{children}</body>
        </html>
    );
}
