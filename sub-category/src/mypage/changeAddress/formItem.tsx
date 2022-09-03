import axios from "axios";
import * as React from "react";
import { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import "./formItem.styles.css";

interface IFormInput {
  age: number;
  example: string;
  addressName: string;
  firstName: string;
  lastName: string;
  firstNameCata: string;
  lastNameCata: string;
  tel: number;
  posalCode: number;
  mainAddress: string;
  subAddress: string;
  sub2Address: string;
  addressNumber: string;
  houseName: string;
  houseNumber: number;
  houseType: string;
  elevator: string;
}

const FormItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  const addressNameRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const firstNameCataRef = useRef<HTMLInputElement>(null);
  const lastNameCataRef = useRef<HTMLInputElement>(null);
  const telRef = useRef<HTMLInputElement>(null);
  const posalCodeRef = useRef<HTMLInputElement>(null);
  const mainAddressRef = useRef<HTMLInputElement>(null);
  const subAddressRef = useRef<HTMLInputElement>(null);
  const sub2AddressRef = useRef<HTMLInputElement>(null);
  const addressNumberRef = useRef<HTMLInputElement>(null);
  const houseNameRef = useRef<HTMLInputElement>(null);
  const houseNumberRef = useRef<HTMLInputElement>(null);
  const houseTypeRef = useRef<HTMLInputElement>(null);
  const elevatorRef = useRef<HTMLInputElement>(null);

  const [address, setAddress] = useState([]);

  const addAddress = () => {
    axios
      .post("http://localhost:8080/mypage/address", {
        addressName: addressNameRef.current?.value,
        firstName: firstNameRef.current?.value,
        lastName: lastNameRef.current?.value,
        firstNameCata: firstNameCataRef.current?.value,
        lastNameCata: lastNameCataRef.current?.value,
        tel: telRef.current?.value,
        posalCode: posalCodeRef.current?.value,
        mainAddress: mainAddressRef.current?.value,
        subAddress: subAddressRef.current?.value,
        sub2Address: sub2AddressRef.current?.value,
        addressNumber: addressNumberRef.current?.value,
        houseName: houseNameRef.current?.value,
        houseNumber: houseNumberRef.current?.value,
        houseType: houseTypeRef.current?.value,
        elevator: elevatorRef.current?.value,
      })
      .then((response) => {
        setAddress(response.data);
        if (response.data.resultCode === 200) {
          alert("add succeed!");
        }
        console.log(address);
        console.log(addressNameRef.current?.value);
      });
  };
  // console.log(addressNameRef.current?.value);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="backgroung">
        <div className="name">
          <div className="input-name">名称</div>
          <div className="bixu">必須</div>
          <div className="right">
            <div className="att">
              「転居先（地名）」、「勤務先」など認識しやすい名称を入力してください。
              「自宅」は会員情報で設定済みのため、入力できません。
            </div>
            <input
              {...register("addressName", {
                required: true,
                maxLength: 20,
              })}
              //  ref={addressNameRef}
              placeholder="転居先（地名）"
            />
            {errors?.addressName?.type === "required" && (
              <p>入力必須項目です。</p>
            )}
          </div>
        </div>

        <div className="user-name">
          <div className="input-name">氏名</div>
          <div className="bixu">必須</div>
          <div className="right">
            <div>
              {" "}
              <input
                {...register("firstName", {
                  required: true,
                  maxLength: 10,
                  pattern:
                    /[一-龠]+|[ぁ-ゔ]+|[ァ-ヴー]+|[a-zA-Z0-9]+|[ａ-ｚＡ-Ｚ０-９]+|[々〆〤ヶ]+/u,
                })}
                //  ref={firstNameRef}
                placeholder="姓"
              />
              {errors?.firstName?.type === "required" && (
                <p>入力必須項目です。</p>
              )}
              {errors?.firstName?.type === "maxLength" && (
                <p>10文字以内で入力してください。</p>
              )}
              {errors?.firstNameCata?.type === "pattern" && (
                <p>漢字で入力してください。</p>
              )}
            </div>

            <div>
              {" "}
              <input
                {...register("lastName", {
                  required: true,
                  maxLength: 10,
                  pattern:
                    /[一-龠]+|[ぁ-ゔ]+|[ァ-ヴー]+|[a-zA-Z0-9]+|[ａ-ｚＡ-Ｚ０-９]+|[々〆〤ヶ]+/u,
                })}
                //   ref={lastNameRef}
                placeholder="名"
              />
              {errors?.lastName?.type === "required" && (
                <p>入力必須項目です。</p>
              )}
              {errors?.lastName?.type === "maxLength" && (
                <p>10文字以内で入力してください。</p>
              )}
              {errors?.firstNameCata?.type === "pattern" && (
                <p>漢字で入力してください。</p>
              )}
            </div>
          </div>
        </div>

        <div className="user-name-cata">
          <div className="input-name">氏名（カナ）</div>
          <div className="bixu">必須</div>
          <div className="right">
            <div className="att">カタカナで入力してください。</div>
            <div className="name-felx">
              <div className="left-input">
                {" "}
                <input
                  {...register("firstNameCata", {
                    required: true,
                    maxLength: 20,
                    pattern: /[ァ-ヿ]/i,
                  })}
                  //    ref={firstNameCataRef}
                  placeholder="セイ"
                />
                <div>
                  {errors?.firstNameCata?.type === "required" && (
                    <p>入力必須項目です。</p>
                  )}
                  {errors?.firstNameCata?.type === "maxLength" && (
                    <p>20文字以内のカタカナで入力してください。</p>
                  )}
                  {errors?.firstNameCata?.type === "pattern" && (
                    <p>20文字以内のカタカナで入力してください。</p>
                  )}
                </div>
              </div>

              <div>
                {" "}
                <input
                  {...register("lastNameCata", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                  //    ref={lastNameCataRef}
                  placeholder="メイ"
                />
                {errors?.lastNameCata?.type === "required" && (
                  <p>入力必須項目です。</p>
                )}
                {errors?.lastNameCata?.type === "maxLength" && (
                  <p>20文字以内のアルファベットで入力してください。</p>
                )}
                {errors?.lastNameCata?.type === "pattern" && (
                  <p>20文字以内のアルファベットで入力してください。</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="tel-number">
          <div className="input-tel">電話番号</div>
          <div className="bixu">必須</div>
          <div className="right">
            <div className="att">数字で入力してください。</div>
            <input
              {...register("tel", {
                required: true,
                minLength: 1,
                maxLength: 11,
                pattern: /[0-9]/,
              })}
              //   ref={telRef}
              placeholder="0300000000"
            />
            {errors?.tel?.type === "required" && <p>入力必須項目です。</p>}
            {errors?.tel?.type === "minLength" && (
              <p>1桁以上11桁以内の数字で入力してください。</p>
            )}
            {errors?.tel?.type === "maxLength" && (
              <p>1桁以上11桁以内の数字で入力してください。</p>
            )}
            {errors?.tel?.type === "pattern" && (
              <p> 数字で入力してください。</p>
            )}
          </div>
        </div>

        <div className="post-number">
          <div className="input-tel">郵便番号</div>
          <div className="bixu">必須</div>
          <div className="right">
            <div className="att">
              ハイフン不要・数字で入力してください。
              事業所の個別郵便番号はご使用いただけません。
            </div>
            <div className="felx">
              <input
                {...register("posalCode", {
                  required: true,
                  minLength: 7,
                  maxLength: 8,
                  pattern: /^[0-9-+()]*$/,
                })}
                //      ref={posalCodeRef}
                placeholder="123-4567"
              />
              {errors?.posalCode?.type === "required" && (
                <p>郵便番号を入力してください。</p>
              )}
              {errors?.posalCode?.type === "minLength" && (
                <p>郵便番号は半角数字7文字で入力してください。</p>
              )}
              {errors?.posalCode?.type === "maxLength" && (
                <p>郵便番号は半角数字7文字で入力してください。</p>
              )}
              {errors?.posalCode?.type === "pattern" && (
                <p>郵便番号は半角数字7文字で入力してください。</p>
              )}
              <span>郵便番号を調べる</span>
            </div>
          </div>
        </div>

        <input type="submit" />
      </div>
    </form>
  );
};

export default FormItem;
