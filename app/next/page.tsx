import Link from "next/link";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/Footer";

export default function Current() {
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
      <Footer />
    </main>
  );
}
