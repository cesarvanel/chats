/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";

import "./chat.scss";
import {
  MagnifyingGlass,
  DotsThreeOutlineVertical,
  PaperPlaneTilt,
} from "@phosphor-icons/react";
import { useAppSelector } from "../../states/stores/stores";
import moment from "moment";
import { useSocket } from "../../context/socket.context";
import { SocketEvent, message } from "../../types/interface";

const Chat = () => {
  const date  = new Date()
  const { sesUser } = useAppSelector((state) => state.user);
  const { socket, currentUser,setCurrentUser  } = useSocket();
  const [message, setMessage] = useState("");
  const [msgs, setMsgs] = useState<message[]>([])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.length) return console.log("enter a message");
    const data: message = {
      message,
      avatar: sesUser?.avatar as string,
      isMyMessage: true,
      createdAt: date.getHours().toString() ,
    };

    socket.emit(SocketEvent.PRIVATE_MESSAGE, { to: socket.id, data });
    setMessage(''); 
  };

  useEffect(() => {
    socket.on(SocketEvent.RECEIVE_MESSAGE, (data: message) => {

      setMsgs(() =>[...msgs, data])
      console.log(data)
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps

    return() =>{
      socket.off(SocketEvent.RECEIVE_MESSAGE)
    }

    
  }, [msgs, socket]);

  return (
    <div className="Chat">
      {currentUser ? (
        <>
          <header>
            <div className="tolbar">
              <img
                src={`data:image/svg+xml;base64,${currentUser.avatar}`}
                alt=""
              />
              <div className="user">
                <div>{currentUser.username}</div>
                <time>hello wolrd</time>
              </div>
            </div>

            <div className="right-item">
              <div>
                <MagnifyingGlass weight="bold" />
              </div>
              <div className="dropdown">
                <DotsThreeOutlineVertical weight="bold" />{" "}
                <ul className="menu">
                  <li>
                    <a href="#">Logout</a>
                  </li>
                  <li>
                    <a href="#">Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </header>

          <div className="chat">
            { msgs.length &&
              msgs.map((message) => {
                return (
                  <>
                    <div
                      className={`content ${
                        message.isMyMessage ? "sent" : "received"
                      }`}
                    >
                      <span className="message-text">{message.message}</span>
                      <span className="message-time">
                        {moment(message.createdAt).format()}
                      </span>
                    </div>
                  </>
                );
              })}
          </div>

          <form onSubmit={handleSendMessage}>
            <div className="bottom-bar">
              <textarea
                name=""
                id=""
                placeholder="Type a message..."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              ></textarea>

              {message.length && (
                <button type="submit">
                  <PaperPlaneTilt weight="fill" />
                </button>
              )}
            </div>
          </form>
        </>
      ) : (
        <div>Select conversations to begin your chat</div>
      )}
    </div>
  );
};

export default Chat;
