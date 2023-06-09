import { useContext, createContext, useMemo, FC, useState } from "react";
import { io } from "socket.io-client";
import { Socket } from "socket.io-client";
import { Api } from "../utils/constant/constant";
import { Conversations } from "../types/interface";

export type SocketContextProps = {
  socket: Socket;
  userOnlines: Conversations[];
  setUsersOnlines: React.Dispatch<React.SetStateAction<Conversations[]>>;
  currentUser: undefined | Conversations;
  setCurrentUser: React.Dispatch<
    React.SetStateAction<Conversations | undefined>
  >;
  handleCurrentChat: (conversations: Conversations) => void;
  //roomId?: string;
  //rooms: object;
};

const socket = io(Api);

export const SocketContext = createContext<SocketContextProps>({} as any);

export const SocketContextProvider: FC<any> = ({ children }) => {
  //const [rooms, setRoom] = useState<any>({});
  const [userOnlines, setUsersOnlines] = useState<Conversations[]>([]);
  const [currentUser, setCurrentUser] = useState<Conversations>();

  const handleCurrentChat = (conversations: Conversations) => {
    setCurrentUser((prev) => (prev = conversations));
  };
  const value = useMemo(
    () => ({
      socket,
      userOnlines,
      setUsersOnlines,
      currentUser,
      setCurrentUser,
      handleCurrentChat,
    }),
    [currentUser, userOnlines]
  );

  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);

export default SocketContextProvider;
