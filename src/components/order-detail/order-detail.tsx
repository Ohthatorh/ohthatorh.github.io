import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import OrderInfos from "../order-infos/order-infos";

const OrderDetail: FC = () => {
  const [order, setOrder] = useState({
    _id: "",
    ingredients: [],
    status: "",
    name: "",
    createdAt: "",
    updatedAt: "",
    number: 0,
  }) as any;
  const { orderId } = useParams();
  const orderLists = useSelector((store: any) => store.orders.orders);
  useEffect(() => {
    if (orderLists !== null) {
      setOrder(orderLists.filter((order: any) => order._id === orderId)[0]);
    }
  }, [orderLists]);
  return <OrderInfos order={order} />;
};

export default OrderDetail;
