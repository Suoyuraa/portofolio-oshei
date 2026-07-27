"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { projects } from "../data";
import styles from "../portfolio.module.css";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  // State untuk kontrol zoom modal
  const [isZoomed, setIsZoomed] = useState(false);

  // Cari data project berdasarkan slug
  const project = projects.find((p) => p.slug === slug);

  // Efek tombol 'Escape' pada keyboard untuk menutup modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsZoomed(false);
      }
    };

    if (isZoomed) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isZoomed]);

  if (!project) {
    notFound();
  }

  return (
    <main className="wrap">
      <nav className="nav" aria-label="Navigasi utama" style={{ marginBottom: "2rem" }}>
        <Link href="/portofolio">&larr; Kembali ke Portofolio</Link>
      </nav>

      <article style={{ maxWidth: "800px", margin: "0 auto" }}>
        <span style={{ textTransform: "uppercase", letterSpacing: "1px", opacity: 0.8 }}>
          {project.category}
        </span>
        <h1 style={{ fontSize: "2.5rem", margin: "0.5rem 0 1.5rem" }}>{project.title}</h1>

        {/* Gambar Utama (Dapat Klik untuk Zoom) */}
        <div 
          onClick={() => setIsZoomed(true)} 
          style={{ 
            position: "relative", 
            width: "100%", 
            height: "450px", 
            marginBottom: "2rem",
            cursor: "zoom-in"
          }}
          title="Klik untuk memperbesar gambar"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: "cover", borderRadius: "8px" }}
            priority
          />
        </div>

        <section>
          <h2>Deskripsi Proyek</h2>
          <p style={{ fontSize: "1.125rem", lineHeight: "1.6", color: "#444" }}>
            {project.description}
          </p>
        </section>
      </article>

      {/* Modal Gambar Membesar / Fullscreen */}
      {isZoomed && (
        <div 
          className={styles.modal} 
          role="dialog" 
          aria-modal="true" 
          onClick={() => setIsZoomed(false)}
        >
          <div 
            className={styles.modalContent} 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Exit / Close (X) */}
            <button 
              className={styles.close} 
              type="button" 
              onClick={() => setIsZoomed(false)} 
              aria-label="Tutup gambar"
            >
              &times;
            </button>

            <div style={{ position: "relative", width: "100%", height: "80vh" }}>
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                style={{ objectFit: "contain" }}
                sizes="100vw" 
                priority 
              />
            </div>
            <p style={{ textAlign: "center", marginTop: "1rem", color: "#fff" }}>
              {project.title}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}