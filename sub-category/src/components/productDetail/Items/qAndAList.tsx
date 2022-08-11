import { Fragment } from "react";
import "./qAndAList.styles.css";
import { QAndA } from "../productDetail";
import { HeartOutlined, LikeOutlined } from "@ant-design/icons";
import { Space } from "antd";

type QAndAProps = {
  qa: QAndA;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
};

const QAndAList = ({ qa, setPageNum }: QAndAProps) => {
  const { question, questionDate, answer, answerDate, great } = qa;

  return (
    <Fragment>
      <div className="question">Q. {question}</div>
      <div className="q-date">投稿日 {questionDate}</div>
      <div className="block"></div>
      <div className="answer-a">
        <div className="answer"> A.</div>
        {answer}
      </div>
      <div className="a-date">回答日 {answerDate}</div>
      <div className="great">
        <link
          rel="shortcut icon"
          href="icons8-gratipay.svg"
          type="image/x-icon"
        />
        <Space>
          <LikeOutlined />
        </Space>{" "}
        参考になった ({great}人)
      </div>
    </Fragment>
  );
};

export default QAndAList;
