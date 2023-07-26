import { useParams } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import OrderInfos from "../order-infos/order-infos";
import { useAppSelector } from "../../services/hooks/hooks";
import { IOrderItem } from "../../services/types/types";

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
  const orderLists = useAppSelector((store) => store.orders.orders);
  useEffect(() => {
    if (orderLists !== null) {
      setOrder(
        orderLists.filter((order: IOrderItem) => order._id === orderId)[0]
      );
    }
  }, [orderLists]);
  return <OrderInfos order={order} />;
};

export default OrderDetail;
