import { Providers } from "./providers";
import type { Metadata } from "next";
import { NavBar } from "@/components/navbar";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Wallet Adapter For Next.js 14 Tutorial by Helius",
  description: "A example repo for how to integrate the Solana Wallet Adapter for Next.js 14 apps",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="absolute">
            <NavBar />
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
