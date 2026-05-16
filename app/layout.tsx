import type { Metadata } from "next";
import "./globals.css";
import ScrollReveal from "./scroll-reveal";

export const metadata: Metadata = {
  title: "Spartan Pool & Spa Service · Spring Hill, FL · CPO Certified",
  description:
    "Weekly pool service, equipment repair, and commercial-grade water chemistry across Spring Hill, Weeki Wachee, and Homosassa. Florida licensed. CPO certified. 14 years experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Work+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-marble text-slate-700 font-sans antialiased">
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
