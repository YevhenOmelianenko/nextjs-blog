type PropsType = {
  page: number;
  pageLength: number;
  totalLength: number;
};

export default async function Pager(props: PropsType) {
  const { page, pageLength, totalLength } = props;
  return (
    <div className="pager">
      page = {page} <br />
      pageLength = {pageLength} <br />
      totalLength = {totalLength} <br />
      [1], [2], [3] ...
    </div>
  );
}
