import React from "react";
import Navbar from "../components/Navbar";

import Sidebar from "./ChatSystem/Sidebar";
import Chat from "./ChatSystem/Chat";

const ChatScreen = () => {
  return (
    <Navbar>
      <Sidebar />
      <Chat />
    </Navbar>
  );
};

export default ChatScreen;
