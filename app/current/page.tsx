"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";
import { rotationContext } from "../api/rotationContext";
import { useContext } from "react";
import { rotation, benefits, description } from "../api/rotationContext";
import Link from "next/link";

export default function Current() {
  const { currRotation } = useContext(rotationContext);

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
        <h1>{rotation[currRotation]}</h1>
        <h2>{benefits[currRotation]}</h2>

        {description[currRotation].map((item, index) => (
          <h3 key={index} className="spacing">
            {item}
          </h3>
        ))}

        <div className="button-container">
          <button className="button-36">
            <a
              href="https://colab.research.google.com/drive/1r6PyKYKHSu4pYON_tRkd9BlhUbDxaGUz?authuser=0#scrollTo=rTui3zxmEANg"
              className="remove-underline"
            >
              More insights
            </a>
          </button>{" "}
          <button className="button-36">
            <Link href="/next" className="remove-underline">
              Next rotation
            </Link>
          </button>{" "}
        </div>
      </div>
    </main>
  );
}
