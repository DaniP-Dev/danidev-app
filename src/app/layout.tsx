import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  // Título base / plantilla
  title: {
    default: "Mi Sitio Web",
    template: "%s | Mi Sitio Web",
  },
  description: "Esta es la descripción global de mi sitio.",
  metadataBase: new URL("https://misitioweb.com"),
  openGraph: {
    title: "Mi Sitio Web",
    description: "Descripción global de mi sitio.",
    url: "https://misitioweb.com",
    siteName: "Mi Sitio Web",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Imagen Open Graph genérica",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi Sitio Web",
    description: "Descripción global de mi sitio.",
    images: ["/twitter-image.jpg"],
  },
  // Puedes agregar más campos: keywords, robots, authors, themeColor, etc.
  keywords: ["nextjs", "ejemplo", "SEO"],
  robots: { index: true, follow: true },
  themeColor: "#ffffff",
  colorScheme: "light",
  applicationName: "Mi Sitio Web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {/* Aquí iría tu header o nav genérico, si lo tienes */}
        <main>{children}</main>
        {/* Aquí tu footer genérico, si lo tienes */}
      </body>
    </html>
  );
}
