      
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

export default function ReceiveMsg() {
    const [msgSent ] = useState("") 
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
            <Avatar alt="Naresh" className="mt-2"  src="https://media-exp1.licdn.com/dms/image/C4E03AQGlgtNGw1YVXw/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=AOiO0z1jN852hQhG-Ntf3ZFKO3swifQkEaiY9YQroAg" />
            <div className="d-flex justify-content-start">
                <div className="msg-box-receive p-2 m-2">                    
                    <div>
                        hello naresh kesa hai bro !
                        hello naresh kesa hai bro !
                    </div>

                    <div className="time text-muted mt-1">
                        <AccessTimeIcon className="watch-icon mr-1"/>00:22 A.M
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