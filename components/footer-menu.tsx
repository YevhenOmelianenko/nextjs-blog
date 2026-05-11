import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/privacy-policy', label: 'Privacy' },
  { href: '/terms-and-conditions', label: 'Terms' },
  { href: '/contact', label: 'Contact' },
] as const;

export function FooterMenu() {
  return (
    <footer className="site-footer">
      <div className="content-wrapper site-footer__inner">
        <div className="site-footer__links">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="site-footer__link">
              {label}
            </Link>
          ))}
        </div>
        <p className="site-footer__note">DevLog — programming news for developers.</p>
      </div>
    </footer>
  );
}
