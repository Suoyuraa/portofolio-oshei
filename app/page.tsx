import Link from "next/link";
import Navbar from "./navbar/Navbar";
import "animate.css";

export default function Home() {
  return (
    <main className="landing">
      {/* Menggunakan Navbar terpisah */}
      <Navbar />

      <section className="hero wrap">
        <div className="hero-copy animate__animated animate__zoomIn"
        style={{ animationDelay: '0.10s' }}>
          <p className="kicker">
            <b /> PORTOFOLIO PRIBADI
          </p>
          <h1>
            Cerita saya,
            <br />
            <em>Tentang</em> saya,
            <br />
            <span>dan ide baru.</span>
          </h1>
          <Link className="underlink" href="/portofolio">
            Lihat karya pilihan <span>↓</span>
          </Link>
        </div>

        <div
          className="hero-sculpture animate__animated animate__bounceInLeft"
          aria-hidden="true"
        >
          <span className="blob blob-yellow" />
          <span className="blob blob-purple" />
          <span className="blob blob-coral" />
          <span className="little-star">✦</span>
          <span className="moving-type">
            WELCOME TO MY PORTFOLIO · WELCOME TO MY PORTFOLIO ·
          </span>
          <span className="year">
            20
            <br />
            26
          </span>
        </div>
      </section>

      <section className="intro-band">
        <div className="wrap">
          <p>
            Kenali saya lebih dekat, lihat proses kreatif saya, atau kirim pesan
            untuk bekerja sama.
          </p>
          <div>
            <Link href="/profile">Profile</Link>
            <Link href="/portofolio">Portofolio</Link>
            <Link href="/kontak">Kontak</Link>
          </div>
        </div>
      </section>
    </main>
  );
}