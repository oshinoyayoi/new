import { Fragment } from "react";
import "./introduction.styles.css";

const Introduction = () => {
  return (
    <Fragment>
      <div className="g-head">
        <h1>ダイニングテーブルセット</h1>
        <div className="g-lead">
          ニトリのダイニングテーブルセットです。シリーズを合わせたダイニングテーブルとダイニングチェアのセットです。お部屋のスペースに合わせて、様々なデザイン、サイズやカラーからお選び頂けます。
        </div>
        <div className="g-unit">
          <div className="g-btn">
            <span>食卓セットの選び方</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Introduction;
