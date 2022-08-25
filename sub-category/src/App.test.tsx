/* eslint-disable react-hooks/rules-of-hooks */
/**
 * @jest-environment jsdom
 */
import { MemoryRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { SetStateAction } from "react";
import Introduction from "./components/introduction/introduction.components";
import GoodsItems from "./components/product-list/components/goodsItems";
import SubCols from "./components/product-list/navigation/selectCategory/cols/subCols";
import ProductIntroduce from "./components/productDetail/Items/productIntroduce";
import QAndAList from "./components/productDetail/Items/qAndAList";
import ColNames from "./components/product-list/navigation/selectCategory/cols/colNames";
import AddQuestion from "./components/productDetail/Items/addQuestion";
import "@testing-library/jest-dom/extend-expect";
import SubHome from "./routes/home/subhome.component";

test("renders the landing page", () => {
  render(<Introduction />);
  expect(screen.getByText(/食卓セットの選び方/)).toHaveTextContent(
    "食卓セットの選び方"
  );
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
    />,
    { wrapper: MemoryRouter }
  );

  screen.getByText("无印良品 MUJI 基础润肤化妆水");
  //expect(goodsId()).toBe("10003");
});

//
test("renders the product introduce", () => {
  render(<ProductIntroduce size={"シングル"} />);
  expect(screen.getByText(/サイズ/)).toHaveTextContent("シングルサイズ");
});

test("renders the QA", () => {
  const { container } = render(
    <QAndAList
      qa={{
        question: "クリーニングに出しても平気ですか？",
        questionDate: "2022/06/19",
        answer:
          "ドライクリーニングは不可、非常に弱いウェットクリーニングは可能となります。洗濯表示は下の画像です。",
        answerDate: "2022/07/16",
        count: 4,
        great: 0,
      }}
      setPageNum={function (value: SetStateAction<number>): void {
        throw new Error("Function not implemented.");
      }}
    />
  );

  // querySelector 会返回当前文档中第一个类名为 "" 的元素
  // eslint-disable-next-line testing-library/no-node-access
  container!.querySelector("question");
  expect(screen.getByText(/^回答日/)).toHaveTextContent("回答日 2022/07/16");
});

test("renders colNames", () => {
  render(
    <ColNames
      Item={{
        colNames: "商品の説明",
        cols: {
          key: 0,
        },
      }}
      filteredResults={[]}
      setFilteredResults={function (value: SetStateAction<string[]>): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
  expect(screen.getByText(/商品の説明/)).toHaveTextContent("商品の説明");
});

// eslint-disable-next-line react-hooks/rules-of-hooks

test("renders the product", () => {
  render(
    <SubCols
      cols={""}
      value={0}
      filteredResults={[]}
      setFilteredResults={function (value: SetStateAction<string[]>): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
});
//input test
describe("入力", () => {
  it("should render the component onto the screen", () => {
    render(
      <SubCols
        cols={"aaa"}
        value={0}
        filteredResults={[]}
        setFilteredResults={function (value: SetStateAction<string[]>): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    expect(screen.getByTestId("add-col-input")).toBeInTheDocument();
  });
});

test("renders subhome", () => {
  const badRoute = "/some/bad/route";
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <SubHome />
    </MemoryRouter>
  );
  expect(screen.getByText(/カテゴリを選択/)).toBeInTheDocument();
});
