
export interface Register {
  username: string;
  email: string;
  number: string;
  avatar: string;
  password: string;
  job: string;
  confPassword: string;
}

export interface User {
  _id: string;
  username: string;
  email: string;
  number: string;
  avatar: string;
  city: string;
  password: string;
  about: string;
  job: string;
  images: any[];
}

export type message = {
  avatar: string;
  message: string;
  createdAt: string;
  isMyMessage: boolean;
};

export type Conversations = User & {
  lastMessage: string; 
  createdAt : Date;
  messages: message[] ;
};

export type Tokens = {
  accessToken: string;
  refreshToken: string;
};

export interface JwtPayload {
  email: string;
  number: string;
}

export type SignUpType = {
  tokens: Tokens;
  user: User;
};
export type SignInType = {
  tokens: Tokens;
  user: User;
};

export interface Login {
  email: string;
  password: string;
}

export type userState = {
  sesUser: null | User;
  loading: "0" | "1" | "3";
  conversations: {
    conversations: Conversations[];
    loading: boolean;
    currentChat: undefined | Conversations;
  };


};

export const SocketEvent = {
  connection: "connection",
  disconnect: "disconnect",
  AUTHENTICATE_ME: "AUTHENTICATE_ME",
  AUTHENTICATED: "AUTHENTICATED",
  ROOM: "ROOM",
  JOINED_ROOM: "JOINED_ROOM",
  ROOM_MESSAGE: "ROOM_MESSAGE",
  ADD_USER: "ADD_USER",
  SEND_MESSAGE: "SEND_MESSAGE",
  RECEIVE_MESSAGE: "RECEIVE_MESSAGE",
  GET_PROFILE_DATA: "GET_PROFILE_DATA",
  NEW_USER: "NEW_USER",
  PRIVATE_MESSAGE: "PRIVATE_MESSAGE"
};
