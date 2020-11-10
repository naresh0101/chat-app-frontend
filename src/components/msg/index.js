import React, { useEffect, useState } from "react";
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from "@material-ui/core";
import AttachmentIcon from '@material-ui/icons/Attachment';
import MoodIcon from '@material-ui/icons/Mood';
import { sendMsg } from "../../actions/msgAction"
import { connect } from 'react-redux';
import io from "socket.io-client"
import "./index.css"

const socketIo = io("http://localhost:5000")

function Mymessage({chatingto}) {
  const me = JSON.parse(localStorage.getItem("user"))
  // console.log(chatingto.activeChat._id);
  let [msgdata, setMsgData] = useState({
    message: '',
    sendbyId: me._id,
    sendtoId: chatingto.activeChat._id,
    time: new Date().toLocaleTimeString()


  });

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    msgdata[name] = value;
    setMsgData(msgdata);

  }
  let Sendmessage = (e) => {
    e.preventDefault();
    socketIo.emit("SEND_CHAT_MESSAGE",msgdata)
    document.getElementById("message").value = null;
  }
 
  socketIo.emit("NEW_USER_CONNECTED", msgdata)

  return (
    <div className="my_msg_form">
      <form className="d-flex justify-content-start" onSubmit={Sendmessage}>
        <IconButton className="attach-msg-btn mt-2">
          <MoodIcon className="text-primary" />
        </IconButton>
        <IconButton className="attach-msg-btn mt-2">
          <AttachmentIcon className="text-primary" />
        </IconButton>
        <input id="message" placeholder="Type you message ..." onChange={handleChange} name="message" className="m-2 p-2 sent-msg" />
        <IconButton className="send-btn mt-2" type="submit">
          <SendIcon className="text-white" />
        </IconButton>
      </form>
    </div>
  );
}

const mapStateToProps = state => ({ 
  chatingto : state.userReducer
})
export default connect(mapStateToProps,{sendMsg})(Mymessage);
