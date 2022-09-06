import { Fragment } from "react";
import { Link } from "react-router-dom";
import Category from "../category/category";
import { Space } from "antd";
import {
  AccountBookOutlined,
  BankOutlined,
  FileSearchOutlined,
  HeartOutlined,
  HomeOutlined,
  LikeOutlined,
  StarOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./mypage.styles.css";
import Recommendation from "./recommendation/recommendation";

const Mypage = () => {
  return (
    <Fragment>
      <div className="backgroung-mypage">
        <Category />
        <div className="lead-to-home">
          <div className="links-container">
            <Link className="nav-link" to="/">
              ホーム
            </Link>
            {"  >  "} マイページ
          </div>
        </div>
        <div className="main-page">
          <div className="mypage-left">
            <div className="login-out">
              <div className="green-background">
                ニトリメンバーズ　ネット会員
              </div>
              <div className="out">ログアウト</div>
            </div>
            <div className="attention-mypage">* 会員種別について</div>
            <div className="user-name-mypage">
              <div className="user-name">○○</div>
              さんの会員証
            </div>
            <div className="code-mypage">
              <div className="p-barcode">
                <img
                  id="js-bar-code"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAyAQAAAAAxKqlMAAAAL0lEQVR42mP4Oa+iTnIe+/wZdZWNM+fVVUhUpDfOq2OfOZ9hVGZUZlRmVGbEyQAA/C9W89D1ZgAAAAAASUVORK5CYII="
                />
                <p id="memberCardNumber">2200759851580</p>
              </div>
            </div>
            <div className="point-now">
              <div className="point-now-word">現在のポイント</div>0 pt
            </div>
            <div className="point-used">
              <div className="point-used-word">今年失効するポイント</div>0 pt
            </div>
            <div className="att-mypage">
              * 毎日午前9時以降に順次更新されます
            </div>
          </div>
          <div className="mypage-right">
            <ul className="bought">
              <FileSearchOutlined className="icon-1" />
              注文履歴
            </ul>
            <ul className="liked">
              <Link className="nav-link" to="/mypage/liked">
                <StarOutlined className="icon-2" />
                お気に入り商品
              </Link>
            </ul>
            <ul className="shop-liked">
              <BankOutlined className="icon-3" />
              お気に入り店舗
            </ul>
            <ul className="change-my">
              <UserOutlined className="icon-4" />
              お客様情報の確認・変更
            </ul>
            <ul className="address">
              <Link className="nav-link" to="/mypage/address">
                <HomeOutlined className="icon-5" />
                配送先住所の変更・登録
              </Link>
            </ul>
            <ul className="pay-card">
              <Link className="nav-link" to="/mypage/creditcard">
                <AccountBookOutlined className="icon-6" />
                クレジットカードの変更・登録
              </Link>
            </ul>
          </div>
        </div>
        <Recommendation />
      </div>
    </Fragment>
  );
};
export default Mypage;
