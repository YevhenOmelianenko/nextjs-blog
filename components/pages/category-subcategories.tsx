import { Category } from '@/lib/db/schema/categories';
import SubcategoriesBlock from '@/components/blocks/subcategories';

export default async function CategorySubcategoriesPage(props: { category: Category }) {
  const { category } = props;

  return (
    <div>
      <h1>{category.title}</h1>
      <SubcategoriesBlock category={category} />
    </div>
  );
}
