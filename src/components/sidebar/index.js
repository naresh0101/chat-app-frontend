// import { Avatar } from "@material-ui/core";
import React  from "react";

import SearchUserFrom from "../searchUserForm"
import RecentChat from "../recentChat";
import Logout from "../logout";


import "./index.css"


export default function SideBar() {
  
  return (
    <div  className="col-sm-3 sidecontainer">
       <SearchUserFrom />
        <div className="col-sm-12 hidden-xs overflow-auto recent_chats"> 
          <RecentChat />
        </div>
        <Logout/>
    </div>

  )
} 
