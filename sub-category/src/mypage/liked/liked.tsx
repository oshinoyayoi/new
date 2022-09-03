import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Category from "../../category/category";
import LikedItem from "./likedItem";
import "./liked.styles.css";
import { Checkbox } from "antd";

const Liked = () => {
  const [liked, setLiked] = useState([]);

  //获取所有内容,get
  useEffect(() => {
    axios
      .get("http://localhost:8080/skuLike")
      .then((response) => setLiked(response.data.data));
  }, []);
  console.log(liked);
  //删除商品
  const deleteLike = (id: number) => {
    axios
      .delete(`${"http://localhost:8080/skuLike"}/${id}`)
      .then((response) => {
        setLiked(response.data.data);
      });
  };
  return (
    <Fragment>
      <div className="backgroud-liked">
        <Category />
        <div className="lead-to-home">
          <div className="links-container">
            <Link className="nav-link" to="/">
              ホーム
            </Link>
            <Link className="nav-link" to="/mypage">
              {"  >  "} マイページ
            </Link>
            {"  >  "} お気に入り商品
          </div>
        </div>
        <div className="liked-main">
          <div className="tittle-like">お気に入り商品</div>
          <div className="creat-list">
            <input
              placeholder="新規リスト名を入力"
              className="input-name"
            ></input>
            <button className="button">リストを作成</button>
          </div>
          <section className="sub-title">お気に入り商品</section>
          <div className="handle-liked">
            <div className="check-every">
              <input
                type="checkbox"
                //  onChange={changeFilterListHandler}
                //  checked={filteredResults.includes(cols)}
              />
              すべて選択
            </div>
            チェックしたものを
            <div className="delete-like">
              x<div className="button-like">削除</div>
            </div>
          </div>
          <div className="like-list">
            {liked.map((items, index) => {
              return (
                <LikedItem key={index} items={items} deleteLike={deleteLike} />
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Liked;
