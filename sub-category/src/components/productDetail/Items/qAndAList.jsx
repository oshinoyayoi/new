import { Fragment } from "react";
import "./qAndAList.styles.css";
const QAndAList = ({ qa, setPageNum, pageNum }) => {
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
