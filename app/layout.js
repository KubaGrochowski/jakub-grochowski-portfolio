import { Space_Grotesk, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/lib/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollFx from "@/components/ScrollFx";
import BackToTop from "@/components/BackToTop";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-head",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const title = "Jakub Grochowski — Portfolio";
const description =
  "Strony internetowe, aplikacje webowe i automatyzacje z AI — projektowanie i wdrożenia dla firm oraz klientów indywidualnych.";

export const metadata = {
  metadataBase: new URL("https://jakubgrochowski.pl"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://jakubgrochowski.pl",
    siteName: "Jakub Grochowski",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jakub Grochowski — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <div className="noise-overlay" />
        <LanguageProvider>
          <Navbar />
          <main id="top">{children}</main>
          <Footer />
        </LanguageProvider>
        <BackToTop />
        <ScrollFx />
        <SmoothScroll />
        <Analytics />
      </body>
    </html>
  );
}
