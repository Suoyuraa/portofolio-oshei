"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./portfolio.module.css";
import { projects } from "./data"; // <-- Import data dari data.ts

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
            <article className="project-card" key={project.slug}>
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
                <p>{project.category}</p>
                <h2>
                  <Link href={`/portofolio/${project.slug}`}>{project.title}</Link>
                </h2>
                <span>0{index + 1}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}