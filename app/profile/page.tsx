import Image from "next/image";
import Link from "next/link";

export default function ProfilePage() {
  return <main><nav className="nav wrap" aria-label="Navigasi utama"><Link className="logo" href="/">portofolio<span>®</span></Link><div className="nav-center"><Link href="/profile">Profile</Link><Link href="/portofolio">Portofolio</Link></div></nav><section className="profile wrap"><div className="profile-image"><Image src="/images/fotooshei.png" alt="Foto profil" fill priority sizes="(max-width: 720px) 100vw, 40vw" /></div><div className="profile-copy"><p className="kicker"><b /> TENTANG SAYA</p><h1>Halo, saya <em>Oshei</em></h1>
  <p>Saya adalah seorang desainer yang senang mengubah ide menjadi karya yang bermakna. Saya tertarik pada desain, visual, dan proses menciptakan sesuatu yang mudah diingat.</p><p>Saya sangat menyukai dunia desain poster dan saat ini juga sedang mempelajari video editing. Dalam proses berkarya, saya menggunakan Affinity untuk desain grafis dan Spring untuk pembuatan video. Jika Anda ingin melihat hasil karya saya, silakan kunjungi halaman Portofolio saya.
  </p><div className="skills"><span>Kreatif</span><span>Desain</span><span>Belajar</span></div><Link className="underlink" href="/kontak">Ayo terhubung <span>↗</span></Link></div></section></main>;
}
