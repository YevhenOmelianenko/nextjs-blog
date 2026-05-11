import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Category } from '@/lib/db/schema/categories';
import getPostsByCategoryId from '@/lib/db/actions/get-posts-by-category-id';
import Pager from '@/components/pager';
import { POSTS_PER_PAGE, BLOG_PREFIX } from '@/config';

type PropsType = {
  category: Category;
  page: number;
  slugs: string[];
};

const dateFormatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' });

export default async function PostsList(props: PropsType) {
  const { category, page, slugs } = props;
  const { posts, totalCount } = await getPostsByCategoryId(category.id, page);

  if (totalCount === 0) {
    notFound();
  }

  const categoryPath = `/${BLOG_PREFIX}/${slugs.join('/')}`;

  return (
    <div className="posts-list mt-10">
      <h2 className="section-title">Latest posts</h2>
      <div className="card-grid">
        {posts.map((post) => (
          <Link key={post.id} href={`${categoryPath}/${post.slug}`} className="article-card">
            <span className="tag">{category.title}</span>
            <h3 className="heading mt-4 text-xl">{post.title}</h3>
            <p className="mt-3 font-serif text-[var(--text-base)] leading-relaxed text-[var(--text-secondary)]">
              {post.teaser}
            </p>
            <p className="muted-label mt-5">{dateFormatter.format(post.createdAt)}</p>
          </Link>
        ))}
      </div>
      <Pager page={page} pageLength={POSTS_PER_PAGE} totalLength={totalCount} />
    </div>
  );
}
