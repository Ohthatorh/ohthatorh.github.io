import { ISocketMiddleware, RootState } from "../types/types";
import { Middleware } from "redux";
import { getCookie } from "../../utils/cookie";

export const socketMiddleware = (
  wsUrl: string,
  wsActions: ISocketMiddleware,
  auth: boolean
): Middleware<{}, RootState> => {
  return (store) => {
    let socket: WebSocket | null = null;
    return (next) => (action) => {
      const { dispatch } = store;
      const { type } = action;
      const { wsStart, onOpen, onClose, onError, getOrders } = wsActions;
      const accessToken = getCookie("accessToken");
      if (type === wsStart && auth === false) {
        socket = new WebSocket(wsUrl);
      } else if (type === wsStart && auth === true && accessToken) {
        socket = new WebSocket(
          `${wsUrl}?token=${accessToken.split("Bearer ")[1]}`
        );
      }
      if (socket) {
        socket.onopen = (event: Event) => {
          dispatch({ type: onOpen, payload: event });
        };
        socket.onerror = (event: Event) => {
          dispatch({ type: onError, payload: event });
        };
        socket.onmessage = (event: MessageEvent<any>) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;
          dispatch({ type: getOrders, payload: restParsedData });
        };
        socket.onclose = (event: CloseEvent) => {
          dispatch({ type: onClose, payload: event });
        };
      }
      next(action);
    };
  };
};
