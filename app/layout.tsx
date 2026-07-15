import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Portofolio Saya", description: "Profile dan karya pilihan saya." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="id"><body>{children}</body></html>; }
