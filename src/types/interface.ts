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
  tokens: Tokens | null;
  sesUser: null | User;
  loading: "0" | "1";
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
};
