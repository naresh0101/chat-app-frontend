import React from 'react';
import Avatar from '@material-ui/core/Avatar';

export default function YouConnectedOn() {
  return (
    <div >
      <br/>
      <br/>

      <center>
        <div className="time"> 16 Nov 2020</div>
        <div className="d-flex justify-content-center m-2">
            <Avatar alt="Naresh"  src="https://media-exp1.licdn.com/dms/image/C4E03AQGlgtNGw1YVXw/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=AOiO0z1jN852hQhG-Ntf3ZFKO3swifQkEaiY9YQroAg" />
            <Avatar alt="Vicky" className="mecntd" src="https://avatars3.githubusercontent.com/u/39561340?s=460&u=7ac09b32a789f98e958ae1025aeeac31a6d1a9c3&v=4" />
        </div>
        <div className="cnctd-msg text-muted">You are now connected with Vicky mandal.</div>
    </center>
    </div>
  );
}
