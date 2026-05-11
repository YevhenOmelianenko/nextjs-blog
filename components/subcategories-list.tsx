import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Category } from '@/lib/db/schema/categories';
import getSubcategoriesByCategoryId from '@/lib/db/actions/get-subcategories-by-category-id';
import Pager from '@/components/pager';
import { SUBCATEGORIES_PER_PAGE, BLOG_PREFIX } from '@/config';

type PropsType = {
  category: Category;
  page: number;
  slugs: string[];
};

export default async function SubcategoriesList(props: PropsType) {
  const { category, page, slugs } = props;
  const { subcategories, totalCount } = await getSubcategoriesByCategoryId(category.id, page);

  if (totalCount === 0) {
    notFound();
  }

  const parentCategoryPath = `/${BLOG_PREFIX}/${slugs.join('/')}`;

  return (
    <div className="subcategories-list mt-10">
      <h2 className="section-title">Topics</h2>
      <div className="card-grid card-grid--2">
        {subcategories.map((subcat) => (
          <Link
            key={subcat.id}
            href={`${parentCategoryPath}/${subcat.slug}`}
            className="article-card"
          >
            <span className="tag">{category.title}</span>
            <h3 className="heading mt-4 text-xl">{subcat.title}</h3>
            <p className="muted-label mt-4">Open category →</p>
          </Link>
        ))}
      </div>
      <Pager page={page} pageLength={SUBCATEGORIES_PER_PAGE} totalLength={totalCount} />
    </div>
  );
}
