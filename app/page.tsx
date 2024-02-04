"use client";

import Navbar from "./components/Navbar";
import Image from "next/image";
import "./globals.css";
import Footer from "./components/Footer";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/home");

  return (
    <main>
      <Navbar />
      <div className="background">
        <Image
          src="/images/background2.png"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Background"
          priority
        />
        <div className="content">
          <h1 className="title fadeIn">You Plant, We Plan</h1>
          <button className="button-36">
            <a href="#second-section" className="remove-underline">
              Get Started
            </a>
          </button>{" "}
        </div>
      </div>
      <div className="background background2" id="second-section">
        {" "}
        <Image
          src="/images/green.png"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Green Background"
          priority
        />
        <div className="content">
          <h1 className="title fadeIn">Choose what you want to plant</h1>
          <button className="button-37">
            <a
              href="#second-section"
              className="remove-underline"
              role="button"
            >
              Leaf
            </a>
          </button>{" "}
          <button className="button-38">
            <a
              href="#second-section"
              className="remove-underline"
              role="button"
            >
              Legume
            </a>
          </button>{" "}
          <button className="button-39">
            <a
              href="#second-section"
              className="remove-underline"
              role="button"
            >
              Fruits
            </a>
          </button>{" "}
          <button className="button-40">
            <a
              href="#second-section"
              className="remove-underline"
              role="button"
            >
              Root
            </a>
          </button>{" "}
        </div>
      </div>
      <Footer />
    </main>
  );
}
