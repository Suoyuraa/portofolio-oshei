"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosInit() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // animasi cuma jalan sekali waktu di-scroll, hapus kalau mau berulang
    });
  }, []);

  return null; // komponen ini nggak render apa-apa, cuma jalanin efek
}