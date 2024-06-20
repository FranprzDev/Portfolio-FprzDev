import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Francisco Perez Developer",
  description: "The portfolio of a Software Engineer that can make your ideas come true.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en, es" className="scroll-smooth">
      <link rel="icon" href="./favicon.ico" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
