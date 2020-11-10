      
import React, { useState } from 'react';
import ReceiveMsg from '../receiveMsg';
import SentMsg from '../sentMsg';
import YouConnected from '../youConnected';
import {connect} from "react-redux"

import "./index.css"

import io from "socket.io-client"

const socketIo = io("http://localhost:5000")

function Chating({chatingto}) {
  const user = JSON.parse(localStorage.getItem("user"))
  const [chats, setChats] = useState([])

  socketIo.on("CHAT_MESSAGE",(data)=>{
    setChats([ ...chats,data])
  })
  return (
    <div  className="col-sm-12 hidden-xs overflow-auto main-contain">
      <YouConnected />
 
      {
        chats?.map((chat,index)=>{
          if(chat.sendbyId === user._id){
            return(
                <SentMsg key={index} chat={chat}/>
            )
          }return (
                <ReceiveMsg chat={chat}/>
          )

        })
      } 
      
    </div>
  )

}

const mapStateToProps = state => ({ 
  chatingto : state.userReducer
})
export default connect(mapStateToProps,null)(Chating);

