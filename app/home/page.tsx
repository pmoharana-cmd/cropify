"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";
import "../globals.css";
import Footer from "../components/Footer";
import { useContext } from "react";
import { rotationContext } from "../api/rotationContext";
import Link from "next/link";

export default function Home() {
  const { currRotation, setRotation } = useContext(rotationContext);

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
          <button className="button-37" onClick={() => setRotation(0)}>
            <Link href="/current" className="remove-underline" role="button">
              Legume
            </Link>
          </button>{" "}
          <button className="button-38" onClick={() => setRotation(1)}>
            <Link href="/current" className="remove-underline" role="button">
              Greens
            </Link>
          </button>{" "}
          <button className="button-39" onClick={() => setRotation(2)}>
            <Link href="/current" className="remove-underline" role="button">
              Fruiting Vegetables
            </Link>
          </button>{" "}
          <button className="button-40" onClick={() => setRotation(3)}>
            <Link href="/current" className="remove-underline" role="button">
              Root Vegetables
            </Link>
          </button>{" "}
        </div>
      </div>

      <Footer />
    </main>
  );
}
{
  /* <div className="logo fadeIn">
            <Image
              src="/images/cropify.png"
              width={250}
              height={250}
              alt="Cropify Logo"
              priority
            />
          </div> */
}
