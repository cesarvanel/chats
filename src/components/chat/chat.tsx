import React from "react";

import "./chat.scss";
import {
  MagnifyingGlass,
  DotsThreeOutlineVertical,
  PaperPlaneTilt,
} from "@phosphor-icons/react";

const chat = () => {
  return (
    <div className="Chat">
      <header>
        <div className="tolbar">
          <img src="/assets/cesar.jpg" alt="" />
          <div className="user">
            <div>CesarVanel</div>
            <time>Last sunday at today 2:15</time>
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
        <div className="content sent">
          <span className="message-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing
          </span>
          <span className="message-time">1:48</span>
        </div>

        <div className="content received">
          <span className="message-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </span>
          <span className="message-time">1:48</span>
        </div>
      </div>

      <form action="">
        <div className="bottom-bar">
          <input type="text" name="msg" placeholder="Type a message..." />
          <button type="submit">
            <PaperPlaneTilt weight="fill" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default chat;
