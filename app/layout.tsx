import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Main from "@/components/layouts/Main";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Tami",
  description: "Component Library Tami",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-tami-favicon.png" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
