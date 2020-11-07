import React from "react";
import Chating from "../../components/Chating";
import ActiveChatHeader from "../../components/chatRoomHeader";

export default function ChatRoom() {

  return (
    <div className="col-md-9">
        <ActiveChatHeader />
        <Chating />
    </div>
  )
} 
