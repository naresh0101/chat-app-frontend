import React from "react";
import Chating from "../../components/Chating";
import ActiveChatHeader from "../../components/chatRoomHeader";
import Mymessage from "../../components/msg";


function ChatRoom() {
  
  return (
    <div className="col-sm-9 chatroom" >
          <ActiveChatHeader />
          <Chating />
          <Mymessage />
    </div>
  )
} 

export default ChatRoom;