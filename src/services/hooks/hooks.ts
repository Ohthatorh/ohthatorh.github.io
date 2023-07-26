import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";
import { AppDispatch, RootState } from "../types/types";

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = dispatchHook;
export const useAppSelector: TypedUseSelectorHook<RootState> = selectorHook;
