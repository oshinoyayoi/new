import { Fragment } from "react";
import "./lead.styles.css";
import { Link, useLocation, useParams } from "react-router-dom";

const Lead = () => {
  /*  const categoryLocation = useLocation().state;
  const { categoryName, firstLevelName } = categoryLocation;
*/
  const param = useParams();
  const categoryName = param.categoryName;
  const firstLevelName = param.firstLevelName;
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
        <span>{categoryName}</span>
      </div>
    </Fragment>
  );
};

export default Lead;
