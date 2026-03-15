'use server';

import { getPostByFullPath } from '@/app/actions';
import { notFound } from 'next/navigation';

type PropsType = { params: Promise<{ slugs: string[] }> };

export default async function PostPage(props: PropsType) {
  const params = await props.params;
  const post = await getPostByFullPath(params.slugs);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <div>{post.body}</div>
    </div>
  );
}
