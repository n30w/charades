import type { Metadata } from "next";
import { Archivo_Black, Inter, PT_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-archivoBlack",
});

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ptSerif",
});

export const metadata: Metadata = {
  title: "CHARADES",
  description: "An exercise in AI vision",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivoBlack.variable} ${ptSerif.variable}`}
    >
      <body className={``}>{children}</body>
    </html>
  );
}
