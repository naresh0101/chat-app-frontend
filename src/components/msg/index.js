import React, { Fragment }  from "react";
import { Avatar } from "@material-ui/core";


export default function Mymessage() {
 
  return (
    <Fragment>
    <div className="fixed-bottom">
        <div className="d-flex justify-content-between recent-chat-box p-2 border-bottom-1 bg-white ">
        <div className="d-flex justify-content-start">
           
            <Avatar alt="Naresh Kumar Gautam" className="m-2" src="tts://media-exp1.licdn.com/dms/image/C4E03AQGlgtNGw1YVXw/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=AOiO0z1jN852hQhG-Ntf3ZFKO3swifQkEaiY9YQroAg" />
            
            <div className="mt-2">
              <p className="globle-tile">
                👋 Logout !
              </p>
              <p className="text-muted">
               naresh@example.com
              </p>
            </div>
          </div>
      </div>
    </div>
    </Fragment>
  );
}
