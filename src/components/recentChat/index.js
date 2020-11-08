import React, { Fragment }  from "react";
import { Avatar } from "@material-ui/core";
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

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


export default function RecentChat() {

  return (
    <Fragment>
          <div className="d-flex justify-content-between p-2 border-bottom-1 recent-chat-box">
          <div className="d-flex justify-content-start">
              <StyledBadge
              overlap="circle"
              className="mr-2"
              anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
              }}
              variant="dot"
              >
              <Avatar alt="Naresh Kumar Gautam" className="m-2" src="https://media-exp1.licdn.com/dms/image/C4E03AQGlgtNGw1YVXw/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=AOiO0z1jN852hQhG-Ntf3ZFKO3swifQkEaiY9YQroAg" />
              </StyledBadge>
              
              <div className="mt-1">
                <p className="globle-tile chatby">
                    Vicky Mandal
                </p>
                <p className="text-muted last-chat">
                  okay bhai Acha kl kaha pr tha bhai  ane ghrr pr 
                </p>
              </div>
            </div>
            <div>
              <div className="time">
                10:29
              </div>
            </div>
        </div>
        <div className="d-flex justify-content-between p-2 border-bottom-1 recent-chat-box">
          <div className="d-flex justify-content-start">
              <StyledBadge
              overlap="circle"
              className="mr-2"
              anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
              }}
              variant="dot"
              >
              <Avatar alt="Naresh Kumar Gautam" className="m-2" src="https://media-exp1.licdn.com/dms/image/C4E03AQGlgtNGw1YVXw/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=AOiO0z1jN852hQhG-Ntf3ZFKO3swifQkEaiY9YQroAg" />
              </StyledBadge>
              
              <div className="mt-1">
                <p className="globle-tile chatby">
                    Vicky Mandal
                </p>
                <p className="text-muted last-chat">
                  okay bhai Acha kl kaha pr tha bhai  ane ghrr pr 
                </p>
              </div>
            </div>
            <div>
              <div className="time">
                10:29
              </div>
            </div>
        </div>
        <div className="d-flex justify-content-between p-2 border-bottom-1 recent-chat-box">
          <div className="d-flex justify-content-start">
              <StyledBadge
              overlap="circle"
              className="mr-2"
              anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
              }}
              variant="dot"
              >
              <Avatar alt="Naresh Kumar Gautam" className="m-2" src="https://media-exp1.licdn.com/dms/image/C4E03AQGlgtNGw1YVXw/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=AOiO0z1jN852hQhG-Ntf3ZFKO3swifQkEaiY9YQroAg" />
              </StyledBadge>
              
              <div className="mt-1">
                <p className="globle-tile chatby">
                    Vicky Mandal
                </p>
                <p className="text-muted last-chat">
                  okay bhai Acha kl kaha pr tha bhai  ane ghrr pr 
                </p>
              </div>
            </div>
            <div>
              <div className="time">
                10:29
              </div>
            </div>
        </div>
        <div className="d-flex justify-content-between p-2 border-bottom-1 recent-chat-box">
          <div className="d-flex justify-content-start">
              <StyledBadge
              overlap="circle"
              className="mr-2"
              anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
              }}
              variant="dot"
              >
              <Avatar alt="Naresh Kumar Gautam" className="m-2" src="https://media-exp1.licdn.com/dms/image/C4E03AQGlgtNGw1YVXw/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=AOiO0z1jN852hQhG-Ntf3ZFKO3swifQkEaiY9YQroAg" />
              </StyledBadge>
              
              <div className="mt-1">
                <p className="globle-tile chatby">
                    Vicky Mandal
                </p>
                <p className="text-muted last-chat">
                  okay bhai Acha kl kaha pr tha bhai  ane ghrr pr 
                </p>
              </div>
            </div>
            <div>
              <div className="time">
                10:29
              </div>
            </div>
        </div>
        <div className="d-flex justify-content-between p-2 border-bottom-1 recent-chat-box">
          <div className="d-flex justify-content-start">
              <StyledBadge
              overlap="circle"
              className="mr-2"
              anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
              }}
              variant="dot"
              >
              <Avatar alt="Naresh Kumar Gautam" className="m-2" src="https://media-exp1.licdn.com/dms/image/C4E03AQGlgtNGw1YVXw/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=AOiO0z1jN852hQhG-Ntf3ZFKO3swifQkEaiY9YQroAg" />
              </StyledBadge>
              
              <div className="mt-1">
                <p className="globle-tile chatby">
                    Vicky Mandal
                </p>
                <p className="text-muted last-chat">
                  okay bhai Acha kl kaha pr tha bhai  ane ghrr pr 
                </p>
              </div>
            </div>
            <div>
              <div className="time">
                10:29
              </div>
            </div>
        </div>
        <div className="d-flex justify-content-between p-2 border-bottom-1 recent-chat-box">
          <div className="d-flex justify-content-start">
              <StyledBadge
              overlap="circle"
              className="mr-2"
              anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
              }}
              variant="dot"
              >
              <Avatar alt="Naresh Kumar Gautam" className="m-2" src="https://media-exp1.licdn.com/dms/image/C4E03AQGlgtNGw1YVXw/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=AOiO0z1jN852hQhG-Ntf3ZFKO3swifQkEaiY9YQroAg" />
              </StyledBadge>
              
              <div className="mt-1">
                <p className="globle-tile chatby">
                    Vicky Mandal
                </p>
                <p className="text-muted last-chat">
                  okay bhai Acha kl kaha pr tha bhai  ane ghrr pr 
                </p>
              </div>
            </div>
            <div>
              <div className="time">
                10:29
              </div>
            </div>
        </div>
        <div className="d-flex justify-content-between p-2 border-bottom-1 recent-chat-box">
          <div className="d-flex justify-content-start">
              <StyledBadge
              overlap="circle"
              className="mr-2"
              anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
              }}
              variant="dot"
              >
              <Avatar alt="Naresh Kumar Gautam" className="m-2" src="https://media-exp1.licdn.com/dms/image/C4E03AQGlgtNGw1YVXw/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=AOiO0z1jN852hQhG-Ntf3ZFKO3swifQkEaiY9YQroAg" />
              </StyledBadge>
              
              <div className="mt-1">
                <p className="globle-tile chatby">
                    Vicky Mandal
                </p>
                <p className="text-muted last-chat">
                  okay bhai Acha kl kaha pr tha bhai  ane ghrr pr 
                </p>
              </div>
            </div>
            <div>
              <div className="time">
                10:29
              </div>
            </div>
        </div>
        <div className="d-flex justify-content-between p-2 border-bottom-1 recent-chat-box">
          <div className="d-flex justify-content-start">
              <StyledBadge
              overlap="circle"
              className="mr-2"
              anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
              }}
              variant="dot"
              >
              <Avatar alt="Naresh Kumar Gautam" className="m-2" src="https://media-exp1.licdn.com/dms/image/C4E03AQGlgtNGw1YVXw/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=AOiO0z1jN852hQhG-Ntf3ZFKO3swifQkEaiY9YQroAg" />
              </StyledBadge>
              
              <div className="mt-1">
                <p className="globle-tile chatby">
                    Vicky Mandal
                </p>
                <p className="text-muted last-chat">
                  okay bhai Acha kl kaha pr tha bhai  ane ghrr pr 
                </p>
              </div>
            </div>
            <div>
              <div className="time">
                10:29
              </div>
            </div>
        </div>
        <div className="d-flex justify-content-between p-2 border-bottom-1 recent-chat-box">
          <div className="d-flex justify-content-start">
              <StyledBadge
              overlap="circle"
              className="mr-2"
              anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
              }}
              variant="dot"
              >
              <Avatar alt="Naresh Kumar Gautam" className="m-2" src="https://media-exp1.licdn.com/dms/image/C4E03AQGlgtNGw1YVXw/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=AOiO0z1jN852hQhG-Ntf3ZFKO3swifQkEaiY9YQroAg" />
              </StyledBadge>
              
              <div className="mt-1">
                <p className="globle-tile chatby">
                    Vicky Mandal
                </p>
                <p className="text-muted last-chat">
                  okay bhai Acha kl kaha pr tha bhai  ane ghrr pr 
                </p>
              </div>
            </div>
            <div>
              <div className="time">
                10:29
              </div>
            </div>
        </div>
        <div className="d-flex justify-content-between p-2 border-bottom-1 recent-chat-box">
          <div className="d-flex justify-content-start">
              <StyledBadge
              overlap="circle"
              className="mr-2"
              anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
              }}
              variant="dot"
              >
              <Avatar alt="Naresh Kumar Gautam" className="m-2" src="https://media-exp1.licdn.com/dms/image/C4E03AQGlgtNGw1YVXw/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=AOiO0z1jN852hQhG-Ntf3ZFKO3swifQkEaiY9YQroAg" />
              </StyledBadge>
              
              <div className="mt-1">
                <p className="globle-tile chatby">
                    Vicky Mandal
                </p>
                <p className="text-muted last-chat">
                  okay bhai Acha kl kaha pr tha bhai  ane ghrr pr 
                </p>
              </div>
            </div>
            <div>
              <div className="time">
                10:29
              </div>
            </div>
        </div>
        <div className="d-flex justify-content-between p-2 border-bottom-1 recent-chat-box">
          <div className="d-flex justify-content-start">
              <StyledBadge
              overlap="circle"
              className="mr-2"
              anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
              }}
              variant="dot"
              >
              <Avatar alt="Naresh Kumar Gautam" className="m-2" src="https://media-exp1.licdn.com/dms/image/C4E03AQGlgtNGw1YVXw/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=AOiO0z1jN852hQhG-Ntf3ZFKO3swifQkEaiY9YQroAg" />
              </StyledBadge>
              
              <div className="mt-1">
                <p className="globle-tile chatby">
                    Vicky Mandal
                </p>
                <p className="text-muted last-chat">
                  okay bhai Acha kl kaha pr tha bhai  ane ghrr pr 
                </p>
              </div>
            </div>
            <div>
              <div className="time">
                10:29
              </div>
            </div>
        </div>
        <div className="d-flex justify-content-between p-2 border-bottom-1 recent-chat-box">
          <div className="d-flex justify-content-start">
              <StyledBadge
              overlap="circle"
              className="mr-2"
              anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
              }}
              variant="dot"
              >
              <Avatar alt="Naresh Kumar Gautam" className="m-2" src="https://media-exp1.licdn.com/dms/image/C4E03AQGlgtNGw1YVXw/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=AOiO0z1jN852hQhG-Ntf3ZFKO3swifQkEaiY9YQroAg" />
              </StyledBadge>
              
              <div className="mt-1">
                <p className="globle-tile chatby">
                    Vicky Mandal
                </p>
                <p className="text-muted last-chat">
                  okay bhai Acha kl kaha pr tha bhai  ane ghrr pr 
                </p>
              </div>
            </div>
            <div>
              <div className="time">
                10:29
              </div>
            </div>
        </div>
    </Fragment>
  )
} 
