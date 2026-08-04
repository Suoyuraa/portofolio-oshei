"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./portfolio.module.css";
import { projects } from "./data";

export default function PortfolioPage() {
  return (
    <main>
      <nav className="nav wrap" aria-label="Navigasi utama">
        <Link className="logo" href="/">
          portofolio<span>&reg;</span>
        </Link>
        <div className="nav-center">
          <Link href="/profile">Profile</Link>
          <Link href="/portofolio">Portofolio</Link>
        </div>
      </nav>

      <section className="portfolio wrap">
        <header>
          <p className="kicker"><b /> KARYA TERPILIH</p>
          <h1>Portofolio saya.</h1>
          <p>Klik salah satu proyek untuk melihat detail lengkapnya.</p>
        </header>

        <div className="project-grid">
          {projects.map((project, index) => (
            <KartuProyek key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}

function KartuProyek({ project, index }: { project: any; index: number }) {
  const [jumlahLike, setJumlahLike] = useState(0);
  const [sudahLike, setSudahLike] = useState(false);

  function tanganiKlikLike() {
    if (!sudahLike) {
      setJumlahLike(jumlahLike + 1);
      setSudahLike(true);
    } else {
      setJumlahLike(jumlahLike - 1);
      setSudahLike(false);
    }
  }

  return (
    <article className="project-card">
      <Link 
        href={`/portofolio/${project.slug}`} 
        className={`project-image ${styles.imageButton}`}
        aria-label={`Lihat detail ${project.title}`}
      >
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          sizes="(max-width: 720px) 100vw, 50vw" 
        />
      </Link>

      <div>
        {/* Conditional Rendering: Tampil jika like >= 5 */}
        {jumlahLike >= 5 && (
          <p style={{ color: "#e11d48", fontWeight: "bold", fontSize: "0.85rem", marginBottom: "4px" }}>
            🔥 Proyek Terpopuler!
          </p>
        )}

        <p>{project.category}</p>
        <h2>
          <Link href={`/portofolio/${project.slug}`}>{project.title}</Link>
        </h2>

        {/* Tombol Like tanpa tanda kurung */}
        <div style={{ marginTop: "12px", marginBottom: "12px" }}>
          <button 
            onClick={tanganiKlikLike}
            style={{
              background: sudahLike ? "#20201e" : "#f5f2ec",
              color: sudahLike ? "#f5f2ec" : "#20201e",
              border: "1px solid #20201e",
              padding: "6px 14px",
              borderRadius: "20px",
              fontSize: "13px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
          >
            {sudahLike ? "❤️" : "🤍 Suka"} {jumlahLike}
          </button>
        </div>

        <span>0{index + 1}</span>
      </div>
    </article>
  );
}