"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/Footer";
import { useContext } from "react";
import { rotation, rotationContext } from "../api/rotationContext";
import Link from "next/link";

export default function Current() {
  const { currRotation, setRotation } = useContext(rotationContext);

  const nextRotation = currRotation >= 3 ? 0 : currRotation + 1;

  console.log(currRotation > 3);

  return (
    <main>
      <Navbar />
      <div className="background-image">
        <Image
          src="/images/background2.png"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Background"
          priority
        />
      </div>
      <div className="main-content">
        <div className="grid-container">
          {}
          <div className="box">
            <h2>Legumes</h2>
            <p>
              Green Beans, Peas, Soy Beans, Lupin, Fava beans, Alfalfa,
              Chickpeas, Peanuts
            </p>
          </div>
          <div className="box">
            <h2>Greens</h2>
            <p>
              Lettuce, Kale, Spinach, Broccoli, Cabbage, Cauli, Brussels, Herbs,
              Bok Choy, Collards
            </p>
          </div>
          <div className="box">
            <h2>Fruiting Vegetables</h2>
            <p>
              Tomato, Eggplant, Squash, Cucumber, Melons, Potatoes, Peppers,
              Corn
            </p>
          </div>
          <div className="box">
            <h2>Root Vegetables</h2>
            <p>Carrot, Leeks, Radish, Parsnip, Onion, Turnip, Garlic, Beet</p>
          </div>
        </div>
        <div className="rotation-box">
          <h2>Your next rotation is {rotation[nextRotation]}</h2>
        </div>
        <div className="button-container1">
          <button
            className="white"
            onClick={() => {
              setRotation(nextRotation);
            }}
          >
            <Link href="/current" className="white">
              Rotate to next crop
            </Link>
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
