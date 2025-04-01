"use client";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

const mulish = Mulish({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <html lang="en">
        <body className={`${mulish.className} bg-base antialiased`}>
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
