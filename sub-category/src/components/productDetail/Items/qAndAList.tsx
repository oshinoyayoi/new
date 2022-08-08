import { Fragment } from "react";
import "./qAndAList.styles.css";
import { QAndA } from "../productDetail";

type QAndAProps = {
  qa: QAndA;
};

const QAndAList = ({ qa }: QAndAProps) => {
  const { question, questionDate, answer, answerDate } = qa;

  return (
    <Fragment>
      <div className="question">Q. {question}</div>
      <div className="q-date">投稿日 {questionDate}</div>
      <div className="block"></div>
      <div className="answer">A. {answer}</div>
      <div className="a-date">回答日 {answerDate}</div>
    </Fragment>
  );
};

export default QAndAList;
