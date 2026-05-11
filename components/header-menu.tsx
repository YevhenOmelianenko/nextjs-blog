'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/theme-toggle';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Articles' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

function navLinkClass(pathname: string, href: string) {
  const active =
    href === '/'
      ? pathname === '/'
      : pathname === href || pathname.startsWith(`${href}/`);
  return `site-nav__link${active ? ' site-nav__link--active' : ''}`;
}

export function HeaderMenu() {
  const pathname = usePathname() ?? '';

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-logo">
          <span className="site-logo__mark" aria-hidden>
            ▌
          </span>
          <span>DevLog</span>
        </Link>
        <nav className="site-nav" aria-label="Main">
          {nav.map(({ href, label }) => (
            <Link key={href} href={href} className={navLinkClass(pathname, href)}>
              {label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
