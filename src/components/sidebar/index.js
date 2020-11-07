import { Avatar } from "@material-ui/core";
import React  from "react";

import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import SearchUserFrom from "../searchUserForm"
import "./index.css"
import RecentChat from "../recentChat";
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
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);


export default function SideBar() {

  return (
    <div className="sidebar col-md-3"> 
         <div className="m-4">
            <h4 className="text-gray globle-tile">Chats</h4>
            <SearchUserFrom />
         </div>
        <RecentChat />
    </div>
  )
} 
