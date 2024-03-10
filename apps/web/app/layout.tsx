import "./globals.css";
import type { Metadata } from "next";
import { Alexandria } from "next/font/google";

const alexandria = Alexandria({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Osmium",
  description: "Ship your dapp secure and faster with Osmium.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={alexandria.className}>{children}</body>
    </html>
  );
}
