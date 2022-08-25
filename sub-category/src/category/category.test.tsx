import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Category from "./category";
import MenuItem from "./components/MenuItems";
import SubMenu from "./components/subMenu.components";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { Modal } from "antd";
import WriteReview from "../components/productDetail/Items/writeReview";
test("render category", () => {
  render(<Category />);
  expect(screen.getByText(/カテゴリ/)).toHaveTextContent("カテゴリ");
});

test("render menuitem", () => {
  render(
    <MenuItem
      Item={{
        categoryName: "携帯",
        subList: [],
        categoryImage: "123456",
        categoryId: 10003,
      }}
    />
  );
  expect(screen.getByTestId("custom-element")).toHaveClass("category-name");
});

test("full app rendering/navigating", async () => {
  const trueRoute = "/subHome/家电%20数码%20手机/家电/17/1";
  const firstLevelName = "家电%20数码%20手机";
  render(
    <MemoryRouter initialEntries={[trueRoute]}>
      <SubMenu
        sub={{
          categoryName: "家电",
          subList: [],
          categoryImage: "",
          categoryId: 17,
        }}
        firstLevelName={firstLevelName}
      />
      ,
    </MemoryRouter>

    // { wrapper: BrowserRouter }
  );

  const user = userEvent;

  // verify page content for default route
  expect(screen.getByText(/家电/)).toBeInTheDocument();
  expect(screen.getByText(/家电/)).toHaveTextContent("家电17");

  // expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument();
});
