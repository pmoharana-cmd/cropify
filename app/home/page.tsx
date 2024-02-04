import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Maybe authentication if we have time</h1>
      <h1>Put Home page information here</h1>
      <p>Put goals and slogan and stuff</p>
      <button>
        <Link href="/">Back</Link>
      </button>
    </div>
  );
}
