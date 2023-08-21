import { useParams } from "react-router-dom";
import { FC } from "react";
import OrderInfos from "../order-infos/order-infos";
import { useAppSelector } from "../../services/hooks/hooks";
import { IOrderItem } from "../../services/types/types";
import { Preloader } from "../preloader/preloader";

const OrderDetail: FC<{ pathname: string }> = ({ pathname }) => {
  const { orderId } = useParams();
  const order = useAppSelector((store) =>
    pathname === "/feed"
      ? store.orders.orders?.filter(
          (order: IOrderItem) => order._id === orderId
        )[0]
      : store.user.orders?.filter(
          (order: IOrderItem) => order._id === orderId
        )[0]
  );
  return !order ? <Preloader /> : <OrderInfos order={order!} />;
};

export default OrderDetail;
