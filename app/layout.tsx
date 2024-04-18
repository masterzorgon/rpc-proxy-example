import { Providers } from "./_providers";
import type { Metadata } from "next";
import { NavBar } from "@/components/navbar";
import "@/styles/globals.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              pauseOnHover
              theme="light"
            />
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
