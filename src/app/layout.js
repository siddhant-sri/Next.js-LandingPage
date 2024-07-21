import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Landing Page",
  description:
    "A landing web page built with Next.js, TailwindCSS and shadcn UI",
  keywords: ["Next.js", "React", "JavaScript", "Landing Page", "FileSure"],
  authors: [
    { name: "Siddhant Sriavstava", url: "https://github.com/siddhant-sri" },
  ],
  locale: "en_US",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
