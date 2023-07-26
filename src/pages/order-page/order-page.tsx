import { useParams } from "react-router-dom";
import { FC, useState, useEffect } from "react";
import { IOrderItem } from "../../services/types/types";
import OrderInfos from "../../components/order-infos/order-infos";
import { useAppSelector } from "../../services/hooks/hooks";

export const OrderPage: FC = () => {
  const [currentOrder, setCurrentOrder] = useState<IOrderItem>();
  const { orderId } = useParams();
  const orders = useAppSelector((store) => store.orders.orders);
  useEffect(() => {
    if (orders !== null) {
      setCurrentOrder(orders.filter((el: IOrderItem) => el._id === orderId)[0]);
    }
  });

  return <main>{currentOrder && <OrderInfos order={currentOrder} />}</main>;
};
