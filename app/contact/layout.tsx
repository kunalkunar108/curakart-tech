import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to CURAKART about your business website, custom software or automation project.",
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
