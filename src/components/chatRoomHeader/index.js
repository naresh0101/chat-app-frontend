import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Avatar } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';
import DeleteIcon from '@material-ui/icons/Delete';
import { MoreVert } from '@material-ui/icons';
import ClearIcon from '@material-ui/icons/Clear';
import {connect} from "react-redux"


import "./index.css"

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'gray',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '0.6px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 2,
    },
    '100%': {
      transform: 'scale(6.4)',
      opacity: 0,
    },
  },
}))(Badge);

function ActiveChatHeader({chatingto}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [showinput, setShowinput] = React.useState("none");

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const ShowInput = ()=>{
    {showinput === "none" ?  setShowinput("block") :  setShowinput("none")}
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose} className="text-muted"><NotificationsOffIcon className="mr-2"/> Mute</MenuItem>
      <MenuItem onClick={handleMenuClose} className="text-muted"><DeleteIcon className="mr-2"/> Delete Chat</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton>
          <NotificationsOffIcon />
        </IconButton>
        <p>Mute</p>
      </MenuItem>
      <MenuItem>
        <IconButton>
        <DeleteIcon />
        </IconButton>
        <p>Delete Chat</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={`chat_room_header bg-white`} >
      <div>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="open drawer"
          >
          </IconButton>
          <StyledBadge
              overlap="circle"
              anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
              }}
              variant="dot"
              >
              <Avatar alt={chatingto.activeChat.name} className="focus-none mx-2 " src={chatingto.activeChat.avatar} />
            </StyledBadge>
              <p className="globle-tile m-2 chatby">
                  {chatingto.activeChat.name}
              </p>
          
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <form className="d-flex justify-content-start">
              <input  placeholder="Search messages or users" style={{display:showinput}} className="rounded ml-2 p-1 bg-transparent" />
              <IconButton onClick={ShowInput}>
                  {showinput === "none" ? <SearchIcon  className="text-muted" /> : <ClearIcon  className="text-muted" /> }
              </IconButton>
            </form>
            <IconButton onClick={handleMenuClose} className="text-muted">
               <NotificationsOffIcon/>
            </IconButton>
            <IconButton onClick={handleMenuClose} className="text-muted">
             <DeleteIcon/>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            
            >
            <MoreVert />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </div>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
const mapStateToProps = state => ({ 
    chatingto : state.userReducer
})
export default connect(mapStateToProps,null)(ActiveChatHeader);
