import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Current() {
  return (
    <div>
      <main>
        <Navbar />
      </main>
      <h1>Pie chart of next ones to choose</h1>
      <button>
        <Link href="/">Back</Link>
      </button>
    </div>
  );
}
