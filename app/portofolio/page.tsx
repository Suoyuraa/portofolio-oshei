"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./portfolio.module.css";

const projects = [
  { title: "Rumah Kita", category: "Desain poster", image: "/images/FlayerRumahKita.png" },
  { title: "Together", category: "Desain grafis", image: "/images/poster design.png" },
  { title: "Karakter Model", category: "Eksplorasi visual", image: "/images/model baru.png" },
  { title: "Xaor", category: "Karya kreatif", image: "/images/lee jieun.png" },
];

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  useEffect(() => { const closeWithEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setSelectedProject(null); }; window.addEventListener("keydown", closeWithEscape); return () => window.removeEventListener("keydown", closeWithEscape); }, []);
  return <main><nav className="nav wrap" aria-label="Navigasi utama"><Link className="logo" href="/">portofolio<span>&reg;</span></Link><div className="nav-center"><Link href="/profile">Profile</Link><Link href="/portofolio">Portofolio</Link></div></nav><section className="portfolio wrap"><header><p className="kicker"><b /> KARYA TERPILIH</p><h1>Portofolio saya.</h1><p>Tekan salah satu gambar untuk melihatnya dalam ukuran penuh.</p></header><div className="project-grid">{projects.map((project, index) => <article className="project-card" key={project.title}><button className={`project-image ${styles.imageButton}`} type="button" onClick={() => setSelectedProject(project)} aria-label={`Lihat ${project.title} ukuran penuh`}><Image src={project.image} alt={project.title} fill sizes="(max-width: 720px) 100vw, 50vw" /></button><div><p>{project.category}</p><h2>{project.title}</h2><span>0{index + 1}</span></div></article>)}</div>
</section>{selectedProject && <div className={styles.modal} role="dialog" aria-modal="true" aria-label={`Tampilan penuh ${selectedProject.title}`} onClick={() => setSelectedProject(null)}><div className={styles.modalContent} onClick={(event) => event.stopPropagation()}><button className={styles.close} type="button" onClick={() => setSelectedProject(null)} aria-label="Tutup gambar">&times;</button><Image src={selectedProject.image} alt={selectedProject.title} fill sizes="100vw" priority /><p>{selectedProject.title}</p></div></div>}</main>;
}
