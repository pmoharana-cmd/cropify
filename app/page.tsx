import Link from "next/link";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <img src="./images/cropify.png" alt="Logo" />
      <Footer />
    </main>
  );
}
