import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import {connect} from "react-redux"

function YouConnected({chatingto}) {
  const user = JSON.parse(localStorage.getItem("user"))
  return (
    <div >
      <br/>
      <br/>

      <center>
        <div className="d-flex justify-content-center m-2">
            <Avatar alt={chatingto.activeChat.name} className="mecntd" src={chatingto.activeChat.avatar} />
            <Avatar alt={user.name}  src={user.avatar} />
        </div>
      <div className="cnctd-msg text-muted"> 👋 You are now connected with {chatingto.activeChat.name}</div>
    </center>
    </div>
  );
}

const mapStateToProps = state => ({ 
    chatingto : state.userReducer
})
export default connect(mapStateToProps,null)(YouConnected);
