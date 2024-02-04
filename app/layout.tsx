"use client";

import "bootstrap/dist/css/bootstrap.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BootstrapClient from "./components/BootstrapClient";
import { rotationContext } from "./api/rotationContext";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [index, setIndex] = useState(1);

  return (
    <html lang="en">
      <body className={inter.className}>
        <rotationContext.Provider
          value={{ currRotation: index, setRotation: setIndex }}
        >
          {children}
        </rotationContext.Provider>
      </body>
      <BootstrapClient />
    </html>
  );
}
