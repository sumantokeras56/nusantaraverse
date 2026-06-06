import type { Metadata } from "next";
import "./globals.css";
import { PWARegister } from "@/components/PWARegister";

export const metadata: Metadata = {
  title: "Nusantaraverse",
  description: "Platform pembelajaran Indonesia berbasis eksplorasi, AI Tutor, simulasi keputusan, gamifikasi, dan dashboard guru.",
  manifest: "/manifest.json",
  icons: {
    icon: "/icon.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <PWARegister />
        {children}
      </body>
    </html>
  );
}
