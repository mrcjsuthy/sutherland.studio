import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sutherland Studio — Design & Build. Florence to Auckland.",
  description:
    "Sutherland Studio is an industrial design and build practice based in Auckland, New Zealand. Bespoke furniture, objects and small installations with an Italian sensibility.",
  metadataBase: new URL("https://sutherland.studio"),
  openGraph: {
    title: "Sutherland Studio",
    description:
      "Industrial design & build practice — Florence trained, Auckland based.",
    url: "https://sutherland.studio",
    siteName: "Sutherland Studio",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bone text-ink">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
