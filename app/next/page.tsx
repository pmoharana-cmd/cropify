import Link from "next/link";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/Footer";

export default function Current() {
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
            <h2>Header 1</h2>
            <p>Name: Option 1</p>
          </div>
          <div className="box">
            <h2>Header 2</h2>
            <p>Name: Option 2</p>
          </div>
          <div className="box">
            <h2>Header 3</h2>
            <p>Name: Option 3</p>
          </div>
          <div className="box">
            <h2>Header 4</h2>
            <p>Name: Option 4</p>
          </div>
        </div>
        <div className="rotation-box">
          <h2>Your next rotation is …</h2>
        </div>
        <div className="button-container1">
          <button>Rotate to next crop</button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
