import React, { Fragment }  from "react";
import SendIcon from '@material-ui/icons/Send';import "./index.css"
import { IconButton } from "@material-ui/core";
import AttachmentIcon from '@material-ui/icons/Attachment';
import MoodIcon from '@material-ui/icons/Mood';

export default function Mymessage() {
 
  return (
      <div className="my_msg_form">
        <form className="d-flex justify-content-start">
        <IconButton className="attach-msg-btn mt-2">
            <MoodIcon className="text-primary"/>
          </IconButton>
          <IconButton className="attach-msg-btn mt-2">
            <AttachmentIcon className="text-primary"/>
          </IconButton>
            <input  placeholder="Type you message ..." className="m-2 p-2 sent-msg" />
          <IconButton className="send-btn mt-2">
              <SendIcon className="text-white" />
          </IconButton>
          </form> 
    </div>
  );
}
