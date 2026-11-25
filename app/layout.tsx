import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
export const metadata: Metadata = {
  title: { default: "CURAKART — Technology That Moves Businesses Forward", template: "%s | CURAKART" },
  description: "CURAKART builds thoughtful websites, custom software and automation that help businesses move forward.",
  metadataBase: new URL("https://curakart.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "CURAKART — Technology That Moves Businesses Forward",
    description: "Thoughtful websites, custom software and automation for ambitious businesses.",
    type: "website",
    siteName: "CURAKART",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "CURAKART — Technology That Moves Businesses Forward",
    description: "Thoughtful websites, custom software and automation for ambitious businesses.",
    images: ["/twitter-image"],
  },
};
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://curakart.com/#organization",
      "name": "CURAKART",
      "url": "https://curakart.com/",
      "description": "CURAKART is an independent digital and software development studio providing website development, custom software, web applications, UI/UX and business automation.",
      "email": "info@curakart.com",
      "telephone": "+91 80847 25839",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "info@curakart.com",
        "telephone": "+91 80847 25839",
        "areaServed": "IN",
        "availableLanguage": ["English"]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://curakart.com/#website",
      "url": "https://curakart.com/",
      "name": "CURAKART",
      "publisher": {
        "@id": "https://curakart.com/#organization"
      },
      "inLanguage": "en-IN"
    }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /><Header /><main>{children}</main><Footer /></body></html>;
}