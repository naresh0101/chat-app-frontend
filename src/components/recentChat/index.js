import React, { Fragment,useEffect,useState }  from "react";
import { Avatar, Button } from "@material-ui/core";
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import {all_users,active_chat } from "../../actions/userAction"
import { connect } from 'react-redux';
// import io from "socket.io-client"

// const socketIo = io("http://localhost:5000")


const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 2,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);


function RecentChat(props) {
  const [users, setUsers] = useState([])

  const payload = {
      headers: new Headers({
        "X-Api-Key": JSON.parse(localStorage.getItem("token")),   
        'Content-Type': 'application/json' 
      })
    }

    useEffect(()=>{
        fetch('http://localhost:5000/getusers',payload)
            .then(response => response.json())
            .then(data => 
              setUsers(data)
        );
    },[ props.all_users(users)])
    // socketIo.on("CHAT_MESSAGE",(data)=>{
    //   console.log(data);
    // })
    function activeChat(user){
      props.active_chat(user)
    }
   
    return (
    <Fragment>
        {
          users?.map((user,index)=>{
            return(
              <Link to={"/" + user._id} key={index} className="d-flex justify-content-between recent-chat-box">
              <button  onClick={() => activeChat(user)} className="d-flex justify-content-start selectuser">
                  <StyledBadge
                  overlap="circle"
                  className="mr-2"
                  anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                  }}
                  variant="dot"
                  >
                  <Avatar style={{color:"blue", background: "#0000ff8c"}} alt={user.name} className="m-2" src={user.avatar}/>
                  </StyledBadge>
                  
                  <div style={{width:"100%"}}>
                    <div className="mt-1 d-flex justify-content-between" style={{width:"100%"}}>
                      <p className="globle-tile last-chat">
                        {user.name}
                      </p>
                      <div className="time">
                      10:29
                      </div>
                    </div>
                    <p className="text-muted last-chat">
                        okay bhai Acha kl kaha pr tha bhai  ane ghrr pr 
                      </p>
                  </div>
                </button>
                 
            </Link>
            )
          })
        }
    </Fragment>
  )
} 

export default connect(null,{all_users, active_chat})(RecentChat);