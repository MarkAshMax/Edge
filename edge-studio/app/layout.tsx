import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/src/styles/nav.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edge! Studio",
  description:
    "Design a custom print in seconds, preview it in AR, and swap styles anytime.",
  themeColor: "#04050b",
  openGraph: {
    title: "Edge! Studio",
    description:
      "Design a custom print in seconds, preview it in AR, and swap styles anytime.",
    url: "https://edge.design",
    siteName: "Edge! Studio",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

const mobileUXEnabled = process.env.NEXT_PUBLIC_MOBILE_UX !== "false";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        data-mobile-ux={mobileUXEnabled ? "on" : "off"}
        className={`${geistSans.variable} ${geistMono.variable} bg-[#0b0b0f] text-[#f7f7fb] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
