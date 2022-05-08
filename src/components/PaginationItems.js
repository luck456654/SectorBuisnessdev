import '../components/Style.css';
function PaginationItems(props) {
let items=[];

function goPage(currentPage,e) {
  alert(currentPage)
    currentPage = currentPage
    ProductList(content, currentPage)
    setPage(currentPage)
}

 for(let i=1;props.countItem>=i;i++)
 {
  items.push(<div className="link" >{i}</div>)
 }
 return (
      <div className='pagination'>
      {items.map((item) => (
        <div 
        id={item.props.children} 
        className={(item.props.children==props.page)?"activePage":null} 
        onClick={(e) => goPage(item.props.children, e)}>{item}</div>
        ))}
      </div>
    );
  }
export default PaginationItems;

