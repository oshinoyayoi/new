import { useEffect, useState } from "react";
import axios from "axios";
import GoodsItems from "../../components/goodsItems";

function ColNameAndCol() {
  const [goodslist, setGoodsList] = useState([]);

  //获取所有内容,get
  useEffect(() => {
    axios
      .get("http://localhost:8080/newLists")
      .then((response) => setGoodsList(response.data.data));
  }, []);

  return (
    <div className="main-FaceAttributes">
      <div className="colNameAndCol">
        {goodslist.map((goods) => {
          return <GoodsItems key={goods.goodsId} goods={goods} />;
        })}
      </div>
    </div>
  );
}
export default ColNameAndCol;
