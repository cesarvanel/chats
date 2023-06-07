import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { userSlice } from "../app/user/reducer";
import { socketSlice } from "../app/socket/reducer";
import SocketManager from "../app/socket/socket-manager";
import { LocalStorageManager } from "../../utils/localStorage/localStorage";
import { SocketEvent } from "../../types/interface";
import { SocketListenner } from "../app/socket/socketEmitter";
const token = LocalStorageManager.getUserAccessToken();

const stores = configureStore({
  reducer: { user: userSlice.reducer, socket: socketSlice.reducer },
});

const { socket } = SocketManager.getInstance();

socket.on("connect", () => {
  console.log(socket.id);
  socket.emit(SocketEvent.AUTHENTICATE_ME, token);;
});



SocketListenner(socket , stores)


export type RootState = ReturnType<typeof stores.getState>;
export type AppDispatch = typeof stores.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; 

// hook for selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default stores;
