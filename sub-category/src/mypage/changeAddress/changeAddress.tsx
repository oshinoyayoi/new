import { Checkbox } from "antd";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Category from "../../category/category";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./changeAddress.styles.css";
import Form from "./formItem";
import FormItem from "./formItem";

type FormData = {
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
};

const ChangeAddress = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [address, setAddress] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/mypage/address").then((response) => {
      setAddress(response.data.data);
    });
  }, []);

  return (
    <Fragment>
      <div className="backgroung-address">
        <Category />
        <div className="lead-to-home">
          <div className="links-container">
            <Link className="nav-link" to="/">
              ホーム
            </Link>
            {"  >  "} マイページ {"  >  "} 配送先住所の変更・登録
          </div>
          <div className="big-tittle">配送先住所の変更・登録</div>
          <div className="form-address">
            <div className="tittle-address">
              <div className="check-lable">
                <input type="radio" className="radio" />
                <div className="tittle-word">新しい配送先住所を登録</div>
              </div>
            </div>
            <FormItem />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ChangeAddress;
