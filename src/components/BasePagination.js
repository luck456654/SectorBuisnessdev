import PaginationItems from './PaginationItems';
function BasePagination(props) {
  return (
    <div>
    <PaginationItems countItem={props.countItem} page={props.page}></PaginationItems>
    </div>
  );
}

export default BasePagination;