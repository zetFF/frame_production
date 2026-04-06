import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fundamental Rancang Art Media Production",
  description: "Layanan Live Streaming, Photography Video, Design Grafis & Editing Video Pengajian & Syawalan | Tirakatan | Tasyakuran |Info lainnya 👇🏻👇🏻",
  icons: {
    icon: "/images/frame.png", 
    shortcut: "/images/frame.png",
    apple: "/images/frame.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
