"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Mengirim pesan...");

    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(form)),
    });

    const result = await response.json();
    setStatus(result.message);

    if (response.ok) {
      event.currentTarget.reset();
    }
  }

  return (
    <main>
      <nav className="nav wrap" aria-label="Navigasi utama">
        <Link className="logo" href="/">
          portofolio<span>®</span>
        </Link>
        <div className="nav-center">
          <Link href="/profile">Profile</Link>
          <Link href="/portofolio">Portofolio</Link>
        </div>
      </nav>

      <section className="contact wrap">
        <div>
          <p className="kicker">
            <b /> KONTAK
          </p>
          <h1>
            Mari buat sesuatu yang <em>baru.</em>
          </h1>
          <p>
            Kirim pesan melalui formulir ini. Pesan akan diteruskan langsung ke
            email saya.
          </p>
        </div>

        <form onSubmit={sendMessage}>
          <label>
            Nama
            <input name="name" required placeholder="Nama Anda" />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              required
              placeholder="email@anda.com"
            />
          </label>
          <label>
            Pesan
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tulis pesan Anda di sini..."
            />
          </label>
          <button type="submit">
            Kirim pesan <span>↗</span>
          </button>
          <p className="form-status" aria-live="polite">
            {status}
          </p>
        </form>
      </section>
    </main>
  );
}