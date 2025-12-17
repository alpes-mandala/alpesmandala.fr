import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Story_Script } from "next/font/google"
import type React from "react"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _titleFont = Story_Script({ subsets: ["latin"], weight: "400"});

export const metadata: Metadata = {
  title: "Alpes Mandala - Médecine chinoise à Megève",
  description: "Médecine chinoise traditionnelle en station de montagne. Détente et bien-être luxe à Megève et Combloux.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
