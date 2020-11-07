import React from 'react';
import Avatar from '@material-ui/core/Avatar';

export default function YouConnectedOn() {
  return (
    <div className="d-flex justify-content-center">
      <div className="text-center ">
        <div className="time"> 16 Nov 2020</div>
        <br/>
        <div className="d-flex justify-content-start">
            <Avatar alt="Naresh"  src="/static/images/avatar/1.jpg" />
            <Avatar alt="Vicky" className="mecntd" src="/static/images/avatar/2.jpg" />
        </div>
        <div className="cnctd-msg text-muted">You are now connected with Vicky mandal.</div>
    </div>
    </div>
  );
}
