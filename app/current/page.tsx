import Link from "next/link";
import Navbar from "../components/Navbar";
import Image from "next/image";
import "../globals.css";
import Footer from "../components/Footer";

export default function Current() {
  return (
    <>
      <Navbar />
      <div className="container">
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
        <div className="content">
          <div className="slogan-container">
            <h1 className="title fadeIn">You Plant, We Plan</h1>
            <button className="button-36" role="button">
              Get Started
            </button>
          </div>
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
