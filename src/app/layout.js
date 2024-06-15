import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portafolio Personal Francisco Miguel Perez",
  description: "The portfolio of a Software Engineer that can make your ideas come true.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en, es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
