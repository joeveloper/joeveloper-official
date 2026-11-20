import "./globals.css";
import { Inter_Tight } from "next/font/google";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

const font = Inter_Tight({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://joeveloper.com"),
  title: "Joeveloper® | AI & Digital Transformation — Lagos · Paris",
  description:
    "Joeveloper helps organizations transform processes and grow through practical AI, software engineering, digital experiences and technology training.",
  openGraph: {
    title: "Joeveloper® — Technology that moves business forward",
    description: "AI, software, digital growth and enablement. Lagos · Paris · Global.",
    type: "website",
    images: ["/images/hero.png"],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
  icons: {
    icon: "/logos/favicon.ico",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <a href="#main" className="skip-link">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
