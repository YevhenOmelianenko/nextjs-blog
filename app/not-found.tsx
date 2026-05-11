import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="page-main">
      <div className="content-wrapper flex min-h-[50vh] flex-col items-center justify-center text-center">
        <p className="muted-label font-[family-name:var(--font-dm-sans)] text-xs font-semibold uppercase tracking-widest">
          404
        </p>
        <h1 className="heading mt-3 text-3xl sm:text-4xl">Page not found</h1>
        <p className="hero-lead mx-auto mt-4 max-w-lg">
          The link may be outdated or typed incorrectly. Try one of the pages below.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            Home
          </Link>
          <Link href="/blog" className="btn-secondary">
            Articles
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}
