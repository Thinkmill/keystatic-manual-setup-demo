import Link from 'next/link'

export default function Homepage() {
  return (
    <div style={{ display: 'grid', placeItems: 'center', minHeight: '100vh' }}>
      <Link
        style={{
          padding: '1.25rem 2rem',
          backgroundColor: '#e7e7e7',
          borderRadius: '.5rem',
          fontFamily: 'sans-serif',
        }}
        href="/keystatic"
      >
        Go to Keystatic Admin UI
      </Link>
    </div>
  )
}
