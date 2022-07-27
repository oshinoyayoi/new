import { Fragment } from "react";
import "./lead.styles.css";
import { Link } from "react-router-dom";

const Lead = () => {
  return (
    <Fragment>
      <div className="swiper-container">
        <div className="links-container">
          <Link className="nav-link" to="/">
            ホーム
          </Link>
        </div>
        <span className="leadname">{">"} </span>
        <span>テーブル・机</span>
        <span className="leadname">{">"} </span>
        <span>ダイニングテーブルセット【通販】</span>
      </div>
    </Fragment>
  );
};

export default Lead;
