import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact CURAKART to discuss a business website, custom software project or practical automation requirement.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
