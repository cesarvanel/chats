import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../states/stores/stores";
import moment from "moment";

import "./Contact.scss";
import { DotOutline, CheckFat } from "@phosphor-icons/react";
import { loadConversation } from "../../states/app/user/action";
import Loader from "../../components/loader/loader";
import { Conversations, SocketEvent, User } from "../../types/interface";
import { userSlice } from "../../states/app/user/reducer";
import { useSocket } from "../../context/socket.context";

const Contact = () => {
  const dispatch = useAppDispatch();

  const { sesUser } = useAppSelector((state) => state.user);

  useEffect(() => {
    const getContacts = async () => {
      dispatch(loadConversation());
    };

    getContacts();
  }, [dispatch]);

  const { socket, userOnlines, setUsersOnlines, handleCurrentChat } =
    useSocket();

  useEffect(() => {
    socket.on(SocketEvent.NEW_USER, (user: Conversations) => {
      setUsersOnlines(() => {
        return [...userOnlines, user];
      });
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket, userOnlines]);

  return (
    <div className="Contact">
      <div className="contacts">
        {userOnlines.map((userOnline) => {
          return (
            <div
              key={userOnline._id}
              className="contact"
              onClick={() => handleCurrentChat(userOnline)}
            >
              <img
                src={`data:image/svg+xml;base64,${userOnline.avatar}`}
                alt=""
              />

              <div className="data">
                <div className="userName">
                  {userOnline.username} <DotOutline size={32} weight="fill" />
                </div>
                <div className="status">
                  {userOnline.lastMessage && (
                    <div className="check">
                      <CheckFat weight="bold" />{" "}
                      <span>{userOnline.lastMessage}</span>
                    </div>
                  )}
                  {userOnline.createdAt && (
                    <div className="times">
                      <time>{moment(userOnline.createdAt).format("LT")}</time>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
