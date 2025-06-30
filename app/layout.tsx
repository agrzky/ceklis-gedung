import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PusbangSDM - Sistem Pengecekan Gedung",
  description: "Sistem pengecekan ruangan gedung PusbangSDM",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Polyfill for findDOMNode to prevent errors with older libraries
              if (typeof window !== 'undefined' && window.React && window.ReactDOM) {
                if (!window.ReactDOM.findDOMNode) {
                  window.ReactDOM.findDOMNode = function(component) {
                    if (component == null) return null;
                    if (component.nodeType === 1) return component;
                    return component._reactInternalFiber?.stateNode || null;
                  };
                }
              }
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
