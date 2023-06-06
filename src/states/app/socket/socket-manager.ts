/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore

import * as Socket from "socket.io-client";
import { Api } from "../../../utils/constant/constant";

let instance: SocketManager;

export class SocketManager {
  static getInstance() {
    if (!instance) {
      instance = new SocketManager();
      instance.socket = Socket.connect(Api);
    }
    return instance;
  }

  socket!: Socket.Socket;

  connection(cb:CallableFunction){
    this.socket.on("connect", () =>{
        console.log(this.socket.id)
    })
  }

  disconnect(){
    this.socket.disconnect()
  }

  
  authenticate(token: string) {
    this.socket.emit("AUTHENTICATE_ME", { token });
  }
}

export default SocketManager;
