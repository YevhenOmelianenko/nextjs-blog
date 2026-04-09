import { Category } from '@/lib/db/schema/categories';
import getPostsByCategoryId from '@/lib/db/actions/get-posts-by-category-id';

type PropsType = {
  category: Category;
  page: number;
};

export default async function PostsList(props: PropsType) {
  const { category } = props;
  const posts = await getPostsByCategoryId(category.id);

  return (
    <div className="posts-list">
      <div>Display Posts</div>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
