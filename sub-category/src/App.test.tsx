/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import Introduction from "./components/introduction/introduction.components";
import GoodsItems from "./components/product-list/components/goodsItems";
import Review from "./components/productDetail/Items/review";

/*
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/
test("renders the landing page", () => {
  render(<Introduction />);
  screen.getByText("食卓セットの選び方");
});

test("renders the goods Iitems", () => {
  render(
    <GoodsItems
      goods={{
        goodsId: 10003,
        goodsName: "无印良品 MUJI 基础润肤化妆水",
        sellingPrice: 0,
        goodsCoverImg: "",
        colImg: "",
        goodslist: [],
      }}
    />
  );

  screen.getByText("无印良品 MUJI 基础润肤化妆水");
});

test("renders the page", () => {
  render(
    <Review
      item={{
        id: 1,
        goodsName: "両面使える敷きパッド(NクールWSP n-s)",
        reviewTitle: "人生最高のシーツ！",
        review: "",
        customerName: "みったん",
        date: "",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        stars: 0,
        great: 0,
      }}
      thumbsSwiper={undefined}
      setThumbsSwiper={function (value: any): void {
        throw new Error("Function not implemented.");
      }}
      reviewLength={0}
    />
  );
  screen.getByText("みったん");
});
