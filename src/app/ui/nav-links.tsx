'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function NavLinks() {
  const pathname = usePathname()
 
  return (
    <nav>
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
        Home
      </Link>
 
      <Link
        className={`link ${pathname === '/askai' ? 'active' : ''}`}
        href="/askai"
      >
        Ask AI
      </Link>
      <Link
        className={`link ${pathname === '/improve' ? 'active' : ''}`}
        href="/improve"
      >
        Improve Yourself
      </Link>
    </nav>
  )
}