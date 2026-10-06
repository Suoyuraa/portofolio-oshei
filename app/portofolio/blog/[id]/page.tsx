import Link from "next/link";
import Navbar from "../../../navbar/Navbar";

interface Artikel {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// 1. Terima params dari URL
// Di Next.js 15/16, params berupa Promise, jadi harus di-await
export default async function DetailArtikel({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // 2. Fetch data spesifik berdasarkan ID dari params
  const respon = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!respon.ok) {
    return (
      <main>
        <Navbar />
        <section className="wrap" style={{ padding: "60px 0" }}>
          <h1>Artikel tidak ditemukan</h1>
          <Link className="underlink" href="/portofolio/blog">
            Kembali ke daftar artikel
          </Link>
        </section>
      </main>
    );
  }

  // 3. Konversi ke JSON
  const artikel: Artikel = await respon.json();

  return (
    <main>
      <Navbar />

      <section className="wrap" style={{ padding: "40px 0 100px", maxWidth: 800 }}>
        {/* Tombol kembali ke daftar blog */}
        <Link
          href="/portofolio/blog"
          style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase" }}
        >
          ← Kembali ke Daftar Artikel
        </Link>

        <div
          style={{
            background: "#e8e3db",
            border: "1px solid var(--ink)",
            padding: "30px",
            marginTop: 30,
          }}
        >
          {/* Tampilkan title */}
          <h1
            style={{
              textTransform: "capitalize",
              margin: 0,
              fontSize: "clamp(30px, 5vw, 48px)",
              lineHeight: 1,
              letterSpacing: "-.05em",
            }}
          >
            {artikel.title}
          </h1>

          {/* Tampilkan id */}
          <p style={{ color: "var(--coral)", fontWeight: 700, fontSize: 12 }}>
            Artikel ID: {artikel.id}
          </p>
          <hr style={{ border: 0, borderTop: "1px solid var(--line)" }} />

          {/* Tampilkan body */}
          <p style={{ fontSize: 18, lineHeight: 1.6 }}>{artikel.body}</p>
        </div>
      </section>
    </main>
  );
}