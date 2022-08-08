import React from "react";
import { Link } from "react-router-dom";
import "./pageChangeBar.css";

type PageProps = {
  i: number;
  pageNow?: number;
  parentId: number;
  categoryId?: number;
  categoryName?: string;
  firstCategoryName?: string;
  secondCategoryName?: string;
  numsOfItems: number;
};

const PageChangeBar = ({
  pageNow,
  numsOfItems,
  parentId,
  categoryId,
  categoryName,
  firstCategoryName,
  secondCategoryName,
}: PageProps) => {
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

  let pageButtonList: number[] = [];
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
                to={`/subHome/${firstCategoryName}/${categoryName}/${categoryId}/${pageNum}`}
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
