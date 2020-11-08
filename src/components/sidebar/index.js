// import { Avatar } from "@material-ui/core";
import React  from "react";

import SearchUserFrom from "../searchUserForm"
import "./index.css"
import RecentChat from "../recentChat";
// import Logout from "../logout";

export default function SideBar() {
  
  return (
    <div className="sidebar col-md-3"> 
         <SearchUserFrom />
          <RecentChat />
          {/* <Logout /> */}
    </div>
  )
} 
