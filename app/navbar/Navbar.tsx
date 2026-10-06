import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="nav wrap" aria-label="Navigasi utama">
      <Link className="logo" href="/">
        portofolio<span>&reg;</span>
      </Link>
      <div className="nav-center">
        <Link href="/profile">profil</Link>
        <Link href="/portofolio">Portofolio</Link>
        <Link href="/tamu">Tamu</Link>
        <Link href="/portofolio/blog">Blog</Link>   {/* ← baris baru */}
      </div>
    </nav>
  );
} 