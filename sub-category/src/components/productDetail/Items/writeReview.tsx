/* eslint-disable jsx-a11y/no-redundant-roles */
import { Fragment, useState } from "react";
import "./writeReview.styles.css";
import { Button, Modal, message, Upload } from "antd";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import "antd/dist/antd.css";
import React from "react";

export type WriteProps = {
  items: Props;
  reviewTitleRef: React.RefObject<HTMLTextAreaElement>;
  reviewRef: React.RefObject<HTMLTextAreaElement>;
  customerNameRef: React.RefObject<HTMLTextAreaElement>;
  goodsNameRef: React.RefObject<HTMLTextAreaElement>;
  addReview: () => void;
};
type Props = {
  skuName: string;
  color: string;
  img1: string;
  size: string;
};
const WriteReview = ({
  items,
  reviewTitleRef,
  reviewRef,
  customerNameRef,
  goodsNameRef,
  addReview,
}: WriteProps) => {
  const { skuName, color, img1, size } = items;
  const [visible, setVisible] = useState(false);

  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },

    onChange(info: any) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }

      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };
  //rating star
  const [value, setValue] = React.useState<number | null>(2); // initial rating value
  // count words
  const [count, setCount] = React.useState(0);
  let countNum = 500 - count;

  return (
    <Fragment>
      <div id="n-review-btn" className="n-review-btn">
        <button className="g-btn-g-btn-w-sm" role="button" onClick={showModal}>
          <span className="span">商品レビューを書く</span>
          <i className="g-i g-i-arrow-r" aria-hidden="true"></i>
        </button>
        <Modal
          title="商品レビュー"
          visible={visible}
          onOk={addReview}
          onCancel={hideModal}
          okText="提出"
          cancelText="取消"
          className="modal"
        >
          <div className="att">商品レビューを入力してください。</div>
          <div className="goods-a">
            <div className="intro">
              <img src={img1} alt="" className="img" />
              <div className="bolck-box">
                <div className="skuName">{skuName}</div>
                <div className="color-size">
                  カラー:{color}/サイズ:{size}
                </div>
              </div>
            </div>
          </div>

          <div className="write-review">
            <div className="block"></div>
            <div className="point">
              <div className="left">
                <div className="pingjia">評価</div>
                <div className="bixu">必須</div>
              </div>
              <div className="right">
                <div className="low">不満</div>
                <div className="star">
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </Box>
                </div>
                <div className="high">満足</div>
              </div>
            </div>
            <div className="bolck-1"></div>
            <div className="user-name">
              <div className="nick-name">ニックネーム</div>
              <div className="right">
                <div className="a-10">10文字以内で入力してください。</div>
                <textarea
                  className="input-nick-name"
                  rows={1}
                  cols={10}
                  maxLength={10}
                  ref={customerNameRef}
                ></textarea>
              </div>
            </div>

            <div className="title">
              <div className="title-a">タイトル</div>
              <div className="right">
                <div className="a-20">20文字以内で入力してください。</div>

                <textarea
                  className="input-title"
                  rows={1}
                  cols={20}
                  maxLength={20}
                  ref={reviewTitleRef}
                ></textarea>
              </div>
            </div>

            <div className="review">
              <div className="review-a">レビュー本文</div>
              <div className="right">
                <div className="a-500">500文字以内で入力してください。</div>

                <textarea
                  className="input-review"
                  rows={10}
                  cols={80}
                  maxLength={500}
                  onChange={(e) => setCount(e.target.value.length)}
                  ref={reviewRef}
                ></textarea>
                <div id="the-count"></div>
                <div className="words">
                  あと　{countNum}　文字入力できます。
                </div>
              </div>
            </div>

            <div className="photo">
              <div className="photo-a">写真（最大5枚）</div>
              <div className="right">
                <Upload {...props}>
                  <Button className="button">写真を選択</Button>
                </Upload>
                <div className="att-1">
                  *
                  すでに写真を5枚選択している場合は、選択している写真を削除してから新しい写真を選択してください。
                </div>
                <div className="att-2">
                  * 写真は、GIF·JPEG·PNG形式対応しています。
                </div>
                <div className="att-3">
                  * アップロードできる画像サイズは1枚当たり5ＭＢまでとなります。
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </Fragment>
  );
};

export default WriteReview;
