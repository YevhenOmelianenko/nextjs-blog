import { type ReactNode } from 'react';

type PropsType = {
  children?: ReactNode;
};

export default async function CategoryWrapper(props: PropsType) {
  const { children } = props;

  return (
    <main className="page-main">
      <div className="content-wrapper category-wrapper">{children}</div>
    </main>
  );
}
