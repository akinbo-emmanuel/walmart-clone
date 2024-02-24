import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Walmart Clone",
  description: "Walmart Clone is a web application built using Next.js, Oxylabs, Shadcn, and Zustand. It replicates the functionality of the Walmart website, featuring a homepage, search page, product page, and cart.",
  keywords: ["Walmart Clone", "Next.js", "Oxylabs", "Shadcn", "Zustand", "Walmart website", "ecommerce", "shopping"],
  creator: "Emmanuel Akinbo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* HEADER */}
        <Header />

        {children}
      </body>
    </html>
  );
}
