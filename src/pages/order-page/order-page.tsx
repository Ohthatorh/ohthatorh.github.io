import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FC, useState, useEffect } from "react";
import { IOrderItem } from "../../services/types/types";
import OrderInfos from "../../components/order-infos/order-infos";

export const OrderPage: FC = () => {
  const [currentOrder, setCurrentOrder] = useState();
  const { orderId } = useParams();
  const order = useSelector((store: any) => store.orders.orders);
  useEffect(() => {
    if (order !== null) {
      setCurrentOrder(order.filter((el: IOrderItem) => el._id === orderId)[0]);
    }
  });

  return <main>{currentOrder && <OrderInfos order={currentOrder} />}</main>;
};
