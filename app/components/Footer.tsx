import Link from "next/link";

export default function Footer() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand center" href="#">
          Created By:
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
        <div className="collapse navbar-collapse center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link href="" className="nav-link ">
                Praj <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="" className="nav-link">
                Swagat <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="" className="nav-link">
                Arya <span className="sr-only"></span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </main>
  );
}
