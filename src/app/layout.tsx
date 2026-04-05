import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NABHKAS Private Limited | Professional Electrical & Appliance Repairs",
  description: "NABHKAS provides 24/7 emergency electrical services, home appliance repair, and CCTV camera installation. Fast, reliable, and certified technicians.",
  keywords: "electrical service, appliance repair, CCTV installation, emergency electrician, NABHKAS private limited",
  openGraph: {
    title: "NABHKAS Private Limited | Expert Repair Services",
    description: "Reliable electrical and home appliance repairs at your doorstep.",
    images: ['/hero-home.webp'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}