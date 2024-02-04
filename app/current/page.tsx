import { CropData } from "../models/crop";
import fs from "fs";
import Navbar from "../components/Navbar";
import Image from "next/image";
import "../globals.css";
import Footer from "../components/Footer";
import Link from "next/link";
import {
  cropSchema,
  cropCollection,
  getConnection,
  setCrops,
} from "../api/connection";

export default async function Current() {
  // const mongoose = await getConnection();

  // const cropCollection =
  //   mongoose.models.crop_data || mongoose.model("crop_data", cropSchema);

  // // @ts-ignore
  // const results: CropData[] = await cropCollection
  //   .find({})
  //   .sort({ time: -1 })
  //   .limit(1);

  // console.log(results[0].image);

  // fs.writeFile(
  //   "./public/currPlant.png",
  //   results[0].image,
  //   { encoding: "base64" },
  //   function (err) {
  //     console.log("File created");
  //   }
  // );

  return (
    <>
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
          <button className="button-36">
            <a href="#second-section" className="remove-underline">
              Get Started
            </a>
          </button>{" "}
        </div>
      </div>
      <Footer />
    </>
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
