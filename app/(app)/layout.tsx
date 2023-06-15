export const metadata = {
  title: 'Keystatic + Next.js blank starter',
  description: 'A barebones starter for Keystatic + Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
