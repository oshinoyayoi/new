import { Link } from "react-router-dom";
import "./pageChangeBar.css";

const PageChangeBar = ({
  pageNow,
  numsOfItems,
  parentId,
  categoryId,
  categoryName,
  firstCategoryName,
  secondCategoryName,
}) => {
  //   console.log(pageNow, numsOfItems);

  const pageTotal = Math.ceil(numsOfItems / 10);

  /*
  // 當前頁數
  let currentPage = 2;

  // 當"當前頁數"比"總頁數"大的時候，"當前頁數"就等於"總頁數"
  if (currentPage > pageTotal) {
    currentPage = pageTotal;
  }

*/
  let pageButtonList = [];
  for (var i = 1; i <= pageTotal; i++) {
    pageButtonList.push(i);
  }
  return (
    <ul className="page-change-bar">
      <div></div>
      {pageButtonList.map((pageNum) => {
        return (
          <li key={pageNum}>
            {pageNow === pageNum ? (
              <span className="page-num-container-now">{pageNum}</span>
            ) : (
              <Link
                to={
                  //   secondCategoryName
                  //     ? `/subHome/${firstCategoryName}/${parentId}/${categoryName}/${categoryId}/${pageNum}`
                  `/subHome/${firstCategoryName}/${categoryName}/${categoryId}/${pageNum}`
                }
                // state={{ categoryName, firstLevelName, pageNow: pageNum, }}
                // onClick={(event) => pageChange(pageNum)}
              >
                <span className="page-num-container">{pageNum}</span>
              </Link>
            )}
          </li>
        );
      })}

      <div></div>
    </ul>
  );
};
export default PageChangeBar;
