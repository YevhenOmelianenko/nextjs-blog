import getRootCategories from '@/lib/db/actions/get-root-categories';
import Link from 'next/link';
import { BLOG_PREFIX } from '@/config';
export { blogMetadata as metadata } from '@/lib/seo/static';
import { JsonLd } from '@/components/json-ld';
import { blogSchema } from '@/lib/seo/static';

export default async function BlogPage() {
  const categories = await getRootCategories();

  return (
    <>
      <main className="page-main">
        <div className="content-wrapper">
          <h1 className="heading text-3xl sm:text-4xl">Articles</h1>
          <p className="hero-lead mt-4">
            Pick a topic to explore posts. Everything flows through a single column — no sidebars,
            just reading.
          </p>
          <hr className="divider-accent" />
          <div className="card-grid card-grid--2 card-grid--3 mt-10">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/${BLOG_PREFIX}/${cat.slug}`}
                className="article-card"
              >
                <span className="tag">Category</span>
                <h2 className="heading mt-4 text-xl">{cat.title}</h2>
                <p className="muted-label mt-4">View posts →</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <JsonLd schema={blogSchema} />
    </>
  );
}
