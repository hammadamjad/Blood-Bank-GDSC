import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "./ChatSystem/Sidebar";
import Chat from "./ChatSystem/Chat";

const ChatScreen = () => {
  return (
    <Navbar>
      <div className="TitleBar m-4 d-flex justify-content-between align-items-center">
        <h1 className="Heading">Welcome back, Ujala</h1>
        <div className="ProfileItems d-flex justify-content-around align-items-center">
          <img src={require("../assets/images/search.png")} alt="" />
          <img src={require("../assets/images/bell-icon.png")} alt="" />
          <img src={require("../assets/images/profile-avatar.png")} alt="" />
          <span>Ujala Akmal</span>
          <img src={require("../assets/images/drop-down.png")} alt="" />
        </div>
      </div>
      <div className="d-flex h-100 p-4">
        <Sidebar />
        <Chat />
      </div>
    </Navbar>
  );
};

export default ChatScreen;
