import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Story_Script } from "next/font/google"
import type React from "react"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _titleFont = Story_Script({ subsets: ["latin"], weight: "400"});

export const metadata: Metadata = {
  title: "Alpes Mandala - Médecine douce et osthéopathie à Megève, Combloux et Cordon",
  description: "Médecine douce et osthéopathie en station de montagne. Détente et bien-être luxe à Megève, Combloux et Cordon.",
  icons: {
    
  },
  keywords: [
    "médecine douce",
    "ostéopathie",
    "bien-être",
    "détente",
    "massage",
    "megève",
    "combloux",
    "cordon",
    "alpes mandala",
    "médecine traditionnelle",
    "tuina",
    "qi gong",
    "tai chi",
    "yoga",
    "astrologie védique",
    "relaxation",
    "soins énergétiques",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    }
  }
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
