"use client";

import AOS from "aos"; // 1. Tambahkan import AOS JavaScript
import "aos/dist/aos.css";
import Navbar from "../navbar/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./portfolio.module.css";
import { href } from "react-router-dom";

// data/projects.ts (Atau simpan di file portofolio kamu)
export const projects = [
  {
    slug: "rumah-kita",
    title: "Rumah Kita",
    category: "Desain Flayer",
    image: "/images/FlayerRumahKita.png",
    description: "Desain flyer bertema 'Rumah Kita' yang menonjolkan kehangatan dan kenyamanan visual. Dibuat khusus untuk keperluan promosi media sosial.",
    tools: ["Photoshop", "Figma", "Illustrator"],
  },
  {
    slug: "together",
    title: "Together",
    category: "Desain grafis",
    image: "/images/poster design.png",
    description: "Poster eksploratif tentang kebersamaan dengan tata letak modern dan permainan tipografi yang berani.",
    tools: ["Canva", "Photoshop"],
  },
  {
    slug: "karakter-model",
    title: "Karakter Model",
    category: "Eksplorasi visual",
    image: "/images/model baru.png",
    description: "Eksplorasi pemodelan dan pencahayaan visual untuk karakter dengan sentuhan estetika minimalis.",
    tools: ["Blender", "Lightroom"],
  },
  {
    slug: "xaor",
    title: "Xaor",
    category: "Karya kreatif",
    image: "/images/lee jieun.png",
    description: "Karya seni digital kreatif yang menggabungkan elemen surealis dan pencahayaan warna neon.",
    tools: ["Procreate", "Photoshop"],
  },
];

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);

  useEffect(() => {
    // 2. Inisialisasi AOS agar elemen dengan data-aos dimunculkan & dianimasikan
    AOS.init({
      duration: 800, // Durasi animasi (opsional)
      once: true,    // Jalankan animasi 1 kali saja (opsional)
    });

    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    window.addEventListener("keydown", closeWithEscape);
    return () => window.removeEventListener("keydown", closeWithEscape);
  }, []);

  return (
    <main>
      <Navbar />

      <section className="portfolio wrap">
        <header>
          <p className="kicker">
            <b /> KARYA GW
          </p>
          <h1>Portofolio saya.</h1>
        </header>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article
              className="project-card"
              key={project.title}
              data-aos="zoom-in"
              data-aos-delay={index * 150} // <-- Menambahkan jeda waktu bergantian (0ms, 150ms, 300ms, dst.)
            >
              <button
                className={`project-image ${styles.imageButton}`}
                type="button"
                onClick={() => setSelectedProject(project)}
                aria-label={`Lihat ${project.title} ukuran penuh`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 720px) 100vw, 50vw"
                />
              </button>
              <div>
                <p>{project.category}</p>
                <h2>{project.title}</h2>
                <span>0{index + 1}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
{/* 
      {selectedProject && (
        <div
          className={styles.modal}
          role="dialog"
          aria-modal="true"
          aria-label={`Tampilan penuh ${selectedProject.title}`}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className={styles.close}
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Tutup gambar"
            >
              &times;
            </button>
            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              fill
              sizes="100vw"
              priority
            />
            <p>{selectedProject.title}</p>
          </div>
        </div>
      )} */}
    </main>
  );
}