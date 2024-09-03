import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'

export const metadata = {
    title: "Next.js 14 with Clerk"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}