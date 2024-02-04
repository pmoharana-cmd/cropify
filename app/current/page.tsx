"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import LineGraph from "../components/Line";
import Image from "next/image";
import Footer from "../components/Footer";
import { rotationContext } from "../api/rotationContext";
import { useContext } from "react";

export default function Current() {
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
      </div>
      <div className="centered-textbox">
        <h1>HEADER FOR DA ROTATION</h1>
        <p>Placeholder for Rotation</p>
        <div className="button-container">
          <button className="button-36">
            <a className="remove-underline">More insights</a>
          </button>{" "}
          <button className="button-36">
            <a className="remove-underline">Next rotation</a>
          </button>{" "}
        </div>
      </div>
    </main>
  );
}
