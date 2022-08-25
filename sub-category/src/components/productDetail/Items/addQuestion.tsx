import { MouseEventHandler } from "react";
import "./addQuestion.styles.css";

export type addProps = {
  questionRef: React.RefObject<HTMLInputElement>;
  addQuestion: MouseEventHandler<HTMLButtonElement> | undefined;
};

const AddQuestion = ({ questionRef, addQuestion }: addProps) => {
  return (
    <div className="question">
      <div className="attention">
        <div className="tittle-a">ご注意ください</div>
        <li className="att-1">
          「ニトリ商品Q&A」は、お客様のご質問とニトリの回答を、他のお客様に参考にしていただくためのサービスです。
          ニトリが不適切と判断した際、後日投稿を削除する場合が
        </li>
        <li className="att-2">
          ニトリが不適切と判断した際、後日投稿を削除する場合がございます。詳細はご利用ガイドのニトリ商品Q&Aについてをご確認ください。
        </li>
      </div>
      <input
        type="textbox"
        id="ZVQuestionTextarea"
        className="zv-textbox"
        placeholder="不明な点を質問（例：この製品には耐久性がありますか？）"
        ref={questionRef}
        aria-label="cost-input"
      />
      <div className="add-question-background">
        <button className="add-question" onClick={addQuestion}>
          質問を投稿
        </button>
      </div>
    </div>
  );
};

export default AddQuestion;
