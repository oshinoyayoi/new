import { Fragment } from "react";
import "./lead.styles.css";
import { Link, useParams } from "react-router-dom";
import React from "react";

const Lead = () => {
  /*  const categoryLocation = useLocation().state;
  const { categoryName, firstLevelName } = categoryLocation;
*/
  const param = useParams();
  const categoryName = param.categoryName;
  const firstLevelName = param.firstLevelName;
  const secondCategoryName = param.secondCategoryName;
  return (
    <Fragment>
      <div className="swiper-container">
        <div className="links-container">
          <Link className="nav-link" to="/">
            ホーム
          </Link>
        </div>
        <span className="leadname">{">"} </span>
        <span>{firstLevelName}</span>
        <span className="leadname">{">"} </span>
        <span>{secondCategoryName}</span>
        <span className="leadname">{">"} </span>
        <span>{categoryName}</span>
      </div>
    </Fragment>
  );
};

export default Lead;
