import { Routerss } from "../../router/router";

import "./conversation.scss";
import { MagnifyingGlass } from "@phosphor-icons/react";

const Conversation = () => {
  return (
    <div className="Conversation">
      <h3>Conversations</h3>
      <div className="search">
        <MagnifyingGlass weight="bold" />
        <input type="text" name="" id="" placeholder="Search here..." />
      </div>

      <div className="text">
        <div>Recents-Chat</div>
        <div> + New Chat</div>
      </div>

      <Routerss />
    </div>
  );
};

export default Conversation;
