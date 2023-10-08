import "./globals.css"
import "./styles/stars-bg.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ocean Gardens",
  description:
    "An accessible platform that visually, sonically, and interactively educates users about ocean-provided services in a way they can easily understand. ",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full min-h-screen flex flex-col`}>
        <div className="background">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
        <main className="flex flex-col items-center justify-between p-2 z-10 relative w-full max-w-5xl mx-auto h-full flex-1">
          {children}
        </main>
      </body>
    </html>
  )
}
