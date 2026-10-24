import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · Software engineer`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  icons: { icon: "/sunflower.png" },
  openGraph: {
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [{ url: "/pfp.jpg", alt: site.name }],
  },
  verification: { google: "tMCNs2fgM6voEHBd3JsySffMFSiUCQDEFEF1iYI3-ZQ" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <ThemeProvider>
          <SiteHeader />
          <main className="page">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
