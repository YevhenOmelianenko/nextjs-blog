import { type ReactNode } from 'react';

type PropsType = {
  children?: ReactNode;
};

export default async function PostWrapper(props: PropsType) {
  const { children } = props;
  return (
    <main className="page-main">
      <article className="content-wrapper post-wrapper">{children}</article>
    </main>
  );
}
