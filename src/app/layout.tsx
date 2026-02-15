import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { LeadDialogProvider } from "@/components/lead/LeadDialogProvider";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { MobileCtaBar } from "@/components/site/MobileCtaBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nrisolutions.us"),
  title: {
    default: "NRI Solutions — Ahmedabad NRI Property, Legal & Asset Services",
    template: "%s — NRI Solutions",
  },
  description:
    "Premium, documentation-first NRI services in Ahmedabad: property management, land services, legal & compliance, and investment advisory with crisp reporting and on-ground execution.",
  openGraph: {
    title: "NRI Solutions",
    description:
      "Ahmedabad-based NRI property, legal, and asset management partner. Clear plans, on-ground execution, and transparent reporting.",
    url: "https://nrisolutions.us",
    siteName: "NRI Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NRI Solutions",
    description:
      "Ahmedabad’s trusted NRI property & legal partner. Documentation-first, remote-friendly execution.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <LeadDialogProvider>
          <SiteHeader />
          <main className="pb-24 lg:pb-0">{children}</main>
          <SiteFooter />
          <MobileCtaBar />
        </LeadDialogProvider>
      </body>
    </html>
  );
}
