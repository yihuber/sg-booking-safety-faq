import type { Metadata } from "next";
import type React from "react";
import Link from "next/link";
import "./globals.css";
import { BrandMark } from "@/components/ui";
import { navItems, site } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(`${site.url}/`),
  title: {
    default: site.name,
    template: `%s | ${site.shortName}`
  },
  description: site.description,
  applicationName: site.name,
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_SG",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-SG">
      <body>
        <div className="relative z-10 min-h-screen overflow-hidden">
          <header className="sticky top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-2xl">
            <nav className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-5 py-4 sm:px-6 lg:px-8">
              <Link href="/" className="flex min-w-0 items-center gap-3">
                <BrandMark />
                <span className="mono-signal truncate text-sm font-bold uppercase text-white sm:text-base">
                  {site.shortName}
                </span>
              </Link>
              <div className="hidden items-center gap-6 md:flex">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-300 transition hover:text-aurum">
                    {item.label}
                  </Link>
                ))}
              </div>
              <a className="btn-secondary hidden sm:inline-flex" href={site.telegramGroup} rel="nofollow noopener noreferrer" target="_blank">
                Official Contact
              </a>
            </nav>
          </header>
          {children}
          <footer className="border-t border-white/10 bg-black/30 px-5 py-9 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-6xl flex-col gap-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
              <p>© {new Date().getFullYear()} {site.name}. Informational guide only.</p>
              <div className="flex flex-wrap gap-4">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
