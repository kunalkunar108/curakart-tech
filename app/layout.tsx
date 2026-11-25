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
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header /><main>{children}</main><Footer /></body></html>;
}