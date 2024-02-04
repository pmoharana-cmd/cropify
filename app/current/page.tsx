import Link from "next/link";

export default function Current() {
  return (
    <div>
      <h1>
        Put current page information here (try to create visualizations that
        will update as data changes)
      </h1>

      <button>
        <Link href="/">Back</Link>
      </button>
    </div>
  );
}
