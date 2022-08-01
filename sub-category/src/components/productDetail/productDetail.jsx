import React, { useState, useEffect } from "react";
import axios from "axios";
import Items from "./Items/Items";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const sizeContext = React.createContext();

  useEffect(() => {
    axios
      .post("http://localhost:8080/skuSize", {
        size: "セミダブル",
        color: "ホワイト",
      })
      .then((response) => setProduct(response.data.data.voList));
  }, [sizeContext]);

  <div className="details-a">
    {product.map((details, skuId) => {
      return <Items key={skuId} details={details} size={sizeContext} />;
    })}
  </div>;

  return <Items />;
};

export default ProductDetail;
