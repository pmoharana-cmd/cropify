import Link from "next/link";

import connection from "./api/connection";

console.log("ran");
console.log(connection);

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        <li className="p-4">
          <Link
            href="/current"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            Current
          </Link>
        </li>
        <li className="p-4">
          <Link
            href="/home"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            Home
          </Link>
        </li>
        <li className="p-4">
          <Link
            href="/next"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            Next
          </Link>
        </li>
      </ul>
      <h1>Landing Page stuff should go here</h1>
    </main>
  );
}
