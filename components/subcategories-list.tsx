import { Category } from '@/lib/db/schema/categories';
import getSubcategoriesByCategoryId from '@/lib/db/actions/get-subcategories-by-category-id';

type PropsType = {
  category: Category;
  page: number;
};

export default async function SubcategoriesList(props: PropsType) {
  const { category } = props;
  const subcategories = await getSubcategoriesByCategoryId(category.id);

  return (
    <div className="subcategories-list">
      <div>Display Subcategories</div>
      {subcategories.map((subcat) => (
        <div key={subcat.id}>{subcat.title}</div>
      ))}
    </div>
  );
}
