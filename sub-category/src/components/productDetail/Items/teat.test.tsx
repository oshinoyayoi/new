import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import AddQuestion from "./addQuestion";
import WriteReview from "./writeReview";
import Review from "./review";
import { Button } from "antd";
import { renderHook } from "@testing-library/react";
test("test", () => {
  const useMockRef = jest
    .spyOn(React, "useRef")
    .mockReturnValueOnce({ current: { value: "this is a question" } });
  const ref = React.useRef<any>();
  expect(ref.current!.value).toBe("this is a question");
});

test("renders the addQuestion", () => {
  const useMockRef = jest
    .spyOn(React, "useRef")
    .mockReturnValueOnce({ current: { value: "this is a question" } });

  const questionRef = React.useRef<any>();

  render(<AddQuestion questionRef={questionRef} addQuestion={undefined} />);
  questionRef.current.value = "new question";

  expect(questionRef.current!.value).toBe("new question");
});

test("renders the write review", () => {
  const useMockRef = jest
    .spyOn(React, "useRef")
    .mockReturnValueOnce({ current: { value: "this is a title" } })
    .mockReturnValueOnce({ current: { value: "this is a review" } })
    .mockReturnValueOnce({ current: { value: "this is a name" } })
    .mockReturnValueOnce({ current: { value: "this is goods name" } });

  const reviewTitleRef = React.useRef<any>();
  const reviewRef = React.useRef<any>();
  const customerNameRef = React.useRef<any>();
  const goodsNameRef = React.useRef<any>();
  //const [visible, setVisible] = useState(false);
  // Arrange
  const handleClose = jest.fn();

  render(
    <WriteReview
      items={{
        skuName: "両面使える敷きパッド　シングル(NクールWSP n-s GY S)",
        color: "red",
        img1: "",
        size: "single",
      }}
      reviewTitleRef={reviewTitleRef}
      reviewRef={reviewRef}
      customerNameRef={customerNameRef}
      goodsNameRef={goodsNameRef}
      addReview={function (): void {
        throw new Error("Function not implemented.");
      }}
    />
  );

  reviewTitleRef.current.value = "new title";
  reviewRef.current.value = "new review";
  expect(reviewTitleRef.current!.value).toBe("new title");
  expect(reviewRef.current!.value).toBe("new review");
  expect(screen.getByText(/商品レビューを書く/)).toHaveTextContent(
    "商品レビューを書く"
  );
  const primaryButton = screen.getByRole("button", {
    name: /商品レビューを書く/i,
  });
  expect(primaryButton).toHaveClass("g-btn-g-btn-w-sm");
  // Assert
  // fireEvent.click(screen.getByText(/商品レビューを書く/i));
  //expect(screen.getByText("商品レビューを入力してください。")).toBeTruthy();

  // Act
  // eslint-disable-next-line testing-library/prefer-screen-queries
  //fireEvent.click(screen.getByText(/close/i));

  // Assert
  expect(handleClose).toHaveBeenCalledTimes(0);
});

test("calls onClick prop when clicked", () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click Me</Button>);
  fireEvent.click(screen.getByText(/click me/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

function useTest() {
  return { res: true };
}

describe("useTest", () => {
  it("should render", () => {
    const { result } = renderHook(() => useTest());
  });
});
