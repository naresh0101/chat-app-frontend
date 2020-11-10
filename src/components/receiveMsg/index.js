      
import React, { Fragment, useState } from 'react';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import {connect} from "react-redux"


function ReceiveMsg({chatingto,chat}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
  return (
    <Fragment>
            <Avatar alt="Naresh" className="m-2"  src={"h"} />
            <div className="d-flex justify-content-start">
                <div className="msg-box-receive p-2 m-2">                    
                    <div>
                       {chat.message}
                    </div>

                    <div className="time text-muted mt-1">
                        <AccessTimeIcon className="watch-icon mr-1"/>
                        <div>
                        {chat.time}
                        </div>
                    </div>
                </div>
                <div >
                    <IconButton
                        aria-label="more"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem className="text-muted" onClick={handleClose}><FileCopyIcon className="mr-2"/> Copy  </MenuItem>
                        <MenuItem className="text-muted" onClick={handleClose}><EditIcon className="mr-2"/> Edit  </MenuItem>
                        <MenuItem className="text-muted" onClick={handleClose}><DeleteIcon className="mr-2"/> Delete  </MenuItem>

                    </Menu>
                </div>
            </div>
    </Fragment>
  )

}
const mapStateToProps = state => ({ 
    chatingto : state.userReducer
})
export default connect(mapStateToProps,null)(ReceiveMsg);
