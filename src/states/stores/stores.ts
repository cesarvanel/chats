import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { userSlice } from "../app/user/reducer";

const stores = configureStore({
  reducer: { user: userSlice.reducer },
});

export type RootState = ReturnType<typeof stores.getState>;
export type AppDispatch = typeof stores.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

// hook for selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default stores;
