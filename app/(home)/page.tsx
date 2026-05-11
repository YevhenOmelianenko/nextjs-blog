import Link from 'next/link';
export { homeMetadata as metadata } from '@/lib/seo/static';
import { homeSchema } from '@/lib/seo/static';
import { JsonLd } from '@/components/json-ld';

export default function HomePage() {
  return (
    <>
      <main className="page-main">
        <div className="content-wrapper">
          <p className="muted-label font-[family-name:var(--font-dm-sans)] text-xs font-semibold uppercase tracking-widest">
            DevLog
          </p>
          <h1 className="heading mt-4 max-w-4xl text-4xl sm:text-5xl">
            Where complexity becomes clarity
          </h1>
          <p className="hero-lead mt-6">
            We write for developers and about developers — precisely, without noise, and always with
            respect for the reader.
          </p>
          <p className="muted-label mt-6 max-w-xl border-l-2 border-[var(--accent)] pl-4 font-[family-name:var(--font-dm-sans)] text-sm leading-relaxed">
            <span className="text-[var(--text-primary)]">Voice:</span> 60% technical · 30%
            friendly · 10% emotional. No clickbait, no corporate filler.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/blog" className="btn-primary">
              Browse articles
            </Link>
            <Link href="/about" className="btn-secondary">
              About the project
            </Link>
          </div>
        </div>
      </main>
      <JsonLd schema={homeSchema} />
    </>
  );
}
