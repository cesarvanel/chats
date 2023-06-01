import React from "react";

import "./HomePage.scss";
import Sidebar from "../../components/sidebar/sidebar";
import Conversation from "../../components/conversation/conversation";
import Profile from "../../components/profile/profile";
import Chat from "../../components/chat/chat";

export const HomePage = () => {
  return (
    <div className="HomePage">
      <Sidebar />

      <Conversation />

      <Chat />

      <Profile />
    </div>
  );
};

export default HomePage;

/*   <Sidebar />
      <Conversation />
      <Chat />
      <Profile />     */
