"use client";

import Navbar from "../navbar/Navbar";
import { useState } from "react";

export default function BukuTamuPage() {
  const [pesan, setPesan] = useState("");
  const [nama, setNama] = useState("");
  const [daftarPesan, setDaftarPesan] = useState<string[]>([]);
  const [daftarNama, setDaftarNama] = useState<string[]>([]);

  const tambahPesan = () => {
    if (pesan.trim() === "") return;

    setDaftarPesan([...daftarPesan, pesan]);
    setPesan("");

    setDaftarNama([...daftarNama, nama]);
    setNama("");
  };

  return (
    <>
    <Navbar/>

    <section className="min-h-screen bg-[#f5f2ec] text-[#20201e] py-20">
      <div className="mx-auto max-w-6xl px-8">

        {/* Judul */}
        <p className="text-xs font-bold uppercase tracking-[0.2em]">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#e2725b]" />
          Guestbook
        </p>

        <h1 className="mt-6 text-6xl font-extrabold leading-none tracking-tight">
          Buku <em className="font-serif font-normal italic">Tamu</em>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-700">
          Terima kasih telah mengunjungi portofolio saya. Silakan tinggalkan
          pesan, kritik, ataupun saran.
        </p>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">

          {/* FORM */}
          <div className="rounded bg-[#e8e3db] p-8">

            <label className="text-xs font-bold uppercase tracking-[0.15em]">
              Pesan
            </label>

            <textarea
              rows={1}
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Tuliskan  Anda..."
              className="mt-3 w-full resize-none border border-[#b8b4ae] bg-[#f5f2ec] p-4 outline-none transition focus:border-[#e2725b]"
            />

            <textarea
              rows={6}
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
              placeholder="Tuliskan pesan Anda..."
              className="mt-3 w-full resize-none border border-[#b8b4ae] bg-[#f5f2ec] p-4 outline-none transition focus:border-[#e2725b]"
            />
          

            <button
              onClick={tambahPesan}
              className="mt-6 w-full rounded-sm cursor-pointer bg-[#e2725b] px-5 py-4 font-bold transition hover:brightness-95"
            >
              Kirim Pesan
            </button>
          </div>

          {/* LIST PESAN */}
          <div>

            <h2 className="mb-6 text-3xl font-bold">
              Pesan Pengunjung
            </h2>

            {daftarPesan.length === 0 ? (
              <div className="rounded-md border border-dashed border-[#b8b4ae] p-10 text-center text-neutral-500">
                Belum ada pesan.
              </div>
            ) : (
              <div className="space-y-2">

                {daftarPesan.map((item, index) => (
                  <div
                    key={index}
                    className="border rounded-md border-[#b8b4ae] bg-white p-5 shadow-sm"
                  >
                    <p className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-[#e2725b]">
                    {daftarNama[index]}
                    </p>

                    <p className="leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}

              </div>
            )}
          </div>

        </div>
      </div>
    </section>
    </>
  );
}