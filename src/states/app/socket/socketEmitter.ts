import SocketManager from "./socket-manager";
import stores from "../../stores/stores";
import { SocketEvent, User } from "../../../types/interface";
import { userSlice } from "../user/reducer";

export const SocketListenner = (
  socket: SocketManager["socket"],
  store: typeof stores
): void => {
  socket.on(SocketEvent.AUTHENTICATED, () => {
    socket.on(SocketEvent.GET_PROFILE_DATA, (data: User) => {
        console.log(data, 'data')
      store.dispatch(userSlice.actions.setSesUser(data));
    });
  });
};
