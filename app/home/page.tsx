import Link from "next/link";
import Navbar from "../components/Navbar";
import LineGraph from "../components/Line";

export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
      </main>
      <div>
        <h1>Maybe authentication if we have time</h1>
        <h1>Put Home page information here</h1>
        <p>Put goals and slogan and stuff</p>
        {/* <LineGraph /> */}
        <button>
          <Link href="/">Back</Link>
        </button>
      </div>
    </div>
  );
}
