import { useParams } from "react-router-dom";
import { FC, useEffect } from "react";
import { IOrderItem } from "../../services/types/types";
import OrderInfos from "../../components/order-infos/order-infos";
import { useAppDispatch, useAppSelector } from "../../services/hooks/hooks";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START,
  WS_USER_CONNECTION_CLOSED,
  WS_USER_CONNECTION_START,
} from "../../services/actions/wsActions";
import { Preloader } from "../../components/preloader/preloader";

export const OrderPage: FC<{ pathname: string }> = ({ pathname }) => {
  const { orderId } = useParams();
  const dispatch = useAppDispatch();
  const order = useAppSelector((store) =>
    pathname === "/feed"
      ? store.orders.orders?.filter(
          (order: IOrderItem) => order._id === orderId
        )[0]
      : store.user.orders?.filter(
          (order: IOrderItem) => order._id === orderId
        )[0]
  );
  useEffect(() => {
    dispatch({
      type:
        pathname === "/feed" ? WS_CONNECTION_START : WS_USER_CONNECTION_START,
    });
    return () => {
      dispatch({
        type:
          pathname === "/feed"
            ? WS_CONNECTION_CLOSED
            : WS_USER_CONNECTION_CLOSED,
      });
    };
  }, []);

  return <main>{!order ? <Preloader /> : <OrderInfos order={order} />}</main>;
};
