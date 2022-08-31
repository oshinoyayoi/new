import { Fragment } from "react";

type ItemsProps = {
  cartItemId: 1;
  userId: 1;
  goodsId: 10003;
  goodsCount: 1;
  isDeleted: 0;
  createTime: string;
  updateTime: string;
  price: number;
  goodsName: string;
  color: string;
  skuId: number;
  size: string;
  stock: number;
  img1: string;
  deliveryTime: string;
};

type Props = {
  items: ItemsProps;
};
const BuyLatter = ({ items }: Props) => {
  return <Fragment></Fragment>;
};

export default BuyLatter;
