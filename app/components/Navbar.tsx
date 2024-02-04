import Link from "next/link";

export default function Navbar() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Cropify
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link href="/home" className="nav-link ">
                Home <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/current" className="nav-link">
                Current <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/next" className="nav-link">
                Next <span className="sr-only"></span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </main>
  );
}
