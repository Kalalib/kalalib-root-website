import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const headingFont = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kalalib.com"),
  title: "KALA | Software, Creative, and Digital Products",
  description:
    "KALA is a Hong Kong-based technology team building web products, software solutions, and creative digital experiences for startups and SMEs worldwide.",
  keywords: [
    "KALA",
    "KALA Hong Kong",
    "software development Hong Kong",
    "web development Hong Kong",
    "startup technology partner",
    "SME digital solutions",
    "product development studio Hong Kong",
  ],
  openGraph: {
    title: "KALA",
    description:
      "Technology and creative product development for startups and SMEs in Hong Kong and globally.",
    url: "https://kalalib.com",
    siteName: "KALA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KALA",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
