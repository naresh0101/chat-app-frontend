      
import React, { Fragment } from 'react';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import FileCopyIcon from '@material-ui/icons/FileCopy';

function SentMsg({chat}) {
    const user = JSON.parse(localStorage.getItem("user"))

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
        <div className="m-2 d-flex align-items-end flex-column bd-highlight">
            <Avatar alt={user.name}   src={user.avatar} />
            <div className="d-flex justify-content-start">
                    <div style={{marginRight:"-20px"}}>
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
                <div className="msg-box-sent p-2 m-2">
                    <div>
                       {chat.message}
                    </div>

                    <div className="time text-white float-right">
                        <AccessTimeIcon className="watch-icon mr-1"/>
                       {chat.time}
                       09:30
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )

}

export default SentMsg;
  