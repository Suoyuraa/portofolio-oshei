import Link from "next/link";
import Navbar from "../../navbar/Navbar";

// Bentuk data dari API JSONPlaceholder
interface Artikel {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// 1. Tambahkan async agar komponen bisa menunggu data
export default async function HalamanBlog() {
  // 2. Proses memanggil pelayan API (Fetch Data)
  const respon = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!respon.ok) {
    throw new Error("Gagal mengambil data artikel");
  }

  // 3. Mengubah paket data menjadi format JSON (Array of Objects)
  const daftarArtikel: Artikel[] = await respon.json();

  return (
    <main>
      <Navbar />

      <section className="portfolio wrap">
        <header>
          <p className="kicker">
            <b /> BLOG
          </p>
          <h1>
            Kumpulan <em style={{ fontFamily: "Georgia, serif", fontWeight: 400 }}>artikel</em>
            <br />
            blog.
          </h1>
          <p style={{ marginTop: 26 }}>
            Data di bawah ini diambil secara langsung dari internet!
          </p>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
            marginTop: 55,
          }}
        >
          {/* 4. Looping data array dari internet menggunakan .map() */}
          {daftarArtikel.map((artikel) => (
            // Setiap elemen hasil map wajib memiliki key yang unik
            <article
              key={artikel.id}
              style={{
                border: "1px solid var(--ink)",
                padding: "22px",
                background: "#e8e3db",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "var(--coral)",
                }}
              >
                Artikel #{artikel.id}
              </p>

              {/* Jadikan judul bisa diklik! */}
              <Link href={`/portofolio/blog/${artikel.id}`}>
                <h3
                  style={{
                    textTransform: "capitalize",
                    margin: "10px 0 12px",
                    fontSize: 22,
                    lineHeight: 1.05,
                    letterSpacing: "-.04em",
                    textDecoration: "underline",
                  }}
                >
                  {artikel.title}
                </h3>
              </Link>

              {/* Isi artikel (body) dari properti API */}
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55 }}>
                {artikel.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}