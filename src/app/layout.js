import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "DigNep - Global Infrastructure & Enterprise IT Solutions",
  description: "DigNep is a premier global networking & IT infrastructure company offering cybersecurity, AI solutions, web development, cloud, and IT training services for modern enterprise environments.",
  keywords: "networking company, IT infrastructure, cybersecurity, AI solutions, web development, network setup, IT training, firewall, LAN WAN setup, DigNep, enterprise technology",
  authors: [{ name: "DigNep" }],
  openGraph: {
    title: "DigNep - Premier Global Networking & IT Solutions",
    description: "Trusted global networking, cybersecurity, AI, and IT solutions provider. Serving enterprise businesses globally.",
    url: "https://dignep.com",
    type: "website",
    },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        <Navbar />
        <div style={{ flex: 1 }}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
