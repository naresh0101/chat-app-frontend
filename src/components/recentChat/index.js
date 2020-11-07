import React  from "react";
import { Avatar } from "@material-ui/core";
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import Icons from "../../assets"

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
      <div>
          <h5 className="text-gray globle-tile m-4">Recent</h5>
          <div className="d-flex justify-content-between recent-chat-box p-2 border-bottom-1 bg-white ">
          <div className="d-flex justify-content-start">
              <StyledBadge
              overlap="circle"
              anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
              }}
              variant="dot"
              >
              <Avatar alt="Naresh Kumar Gautam" className="m-2" src="htts://media-exp1.licdn.com/dms/image/C4E03AQGlgtNGw1YVXw/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=AOiO0z1jN852hQhG-Ntf3ZFKO3swifQkEaiY9YQroAg" />
              </StyledBadge>
              
              <div className="mt-2">
                <p className="globle-tile chatby">
                   Naresh
                </p>
                <p className="text-muted last-chat i_typing">
                  Hey I'm sending somthing. 
                </p>
              </div>
            </div>
            <div>
              <div className="time">
                10:29
              </div>
              <div className="noti pt-1 mt-2 text-center">
                  9
              </div>
            </div>
        </div>
        <div className="d-flex justify-content-between recent-chat-box p-2 border-bottom-1 active-chat">
          <div className="d-flex justify-content-start">
              <StyledBadge
              overlap="circle"
              anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
              }}
              variant="dot"
              >
              <Avatar alt="Naresh Kumar Gautam" className="m-2" src="https://media-exp1.licdn.com/dms/image/C4E03AQGlgtNGw1YVXw/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=AOiO0z1jN852hQhG-Ntf3ZFKO3swifQkEaiY9YQroAg" />
              </StyledBadge>
              
              <div className="mt-2">
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
       
        <div className="d-flex justify-content-between recent-chat-box p-2 border-bottom-1 bg-white">
          <div className="d-flex justify-content-start">
              <StyledBadge
              overlap="circle"
              anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
              }}
              variant="dot"
              >
              <Avatar alt="Naresh Kumar Gautam" className="m-2" src="https://media-exp1.licdn.com/dms/image/C4E03AQGlgtNGw1YVXw/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=AOiO0z1jN852hQhG-Ntf3ZFKO3swifQkEaiY9YQroAg" />
              </StyledBadge>
              
              <div className="mt-2">
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
        <div className="d-flex justify-content-between recent-chat-box p-2 border-bottom-1 bg-white">
          <div className="d-flex justify-content-start">
              <StyledBadge
              overlap="circle"
              anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
              }}
              variant="dot"
              >
              <Avatar alt="Naresh Kumar Gautam" className="m-2" src="https://media-exp1.licdn.com/dms/image/C4E03AQGlgtNGw1YVXw/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=AOiO0z1jN852hQhG-Ntf3ZFKO3swifQkEaiY9YQroAg" />
              </StyledBadge>
              
              <div className="mt-2">
                <p className="globle-tile chatby">
                   Naresh
                </p>
                <p className="text-muted last-chat">
                  okay bhai Acha kl kaha pr tha bhai  ane ghrr pr 
                  okay bhai Acha kl kaha pr tha bhai  ane ghrr pr 
                  okay bhai Acha kl kaha pr tha bhai  ane ghrr pr 
                </p>
              </div>
            </div>
            <div>
              <div className="time">
                10:29
              </div>
              <div className="noti pt-1 mt-2 text-center">
                  2
              </div>
            </div>
        </div>
        <div className="d-flex justify-content-between recent-chat-box p-2 border-bottom-1 bg-white">
          <div className="d-flex justify-content-start">
              <StyledBadge
              overlap="circle"
              anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
              }}
              variant="dot"
              >
              <Avatar alt="Naresh Kumar Gautam" className="m-2" src="https://media-exp1.licdn.com/dms/image/C4E03AQGlgtNGw1YVXw/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=AOiO0z1jN852hQhG-Ntf3ZFKO3swifQkEaiY9YQroAg" />
              </StyledBadge>
              
              <div className="mt-2">
                <p className="globle-tile chatby">
                   Naresh
                </p>
                <p className="text-muted last-chat">
                  okay bhai Acha kl kaha pr tha bhai  ane ghrr pr 
                  okay bhai Acha kl kaha pr tha bhai  ane ghrr pr 
                  okay bhai Acha kl kaha pr tha bhai  ane ghrr pr 
                </p>
              </div>
            </div>
            <div>
              <div className="time">
                10:29
              </div>
              <div className="noti pt-1 mt-2 text-center">
                  2
              </div>
            </div>
        </div>
        <div className="d-flex justify-content-between recent-chat-box p-2 border-bottom-1 bg-white">
          <div className="d-flex justify-content-start">
              <StyledBadge
              overlap="circle"
              anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
              }}
              variant="dot"
              >
              <Avatar alt="Naresh Kumar Gautam" className="m-2" src="https://media-exp1.licdn.com/dms/image/C4E03AQGlgtNGw1YVXw/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=AOiO0z1jN852hQhG-Ntf3ZFKO3swifQkEaiY9YQroAg" />
              </StyledBadge>
              
              <div className="mt-2">
                <p className="globle-tile chatby">
                   Naresh
                </p>
                <p className="text-muted last-chat">
                  okay bhai Acha kl kaha pr tha bhai  ane ghrr pr 
                  okay bhai Acha kl kaha pr tha bhai  ane ghrr pr 
                  okay bhai Acha kl kaha pr tha bhai  ane ghrr pr 
                </p>
              </div>
            </div>
            <div>
              <div className="time">
                10:29
              </div>
              <div className="noti pt-1 mt-2 text-center">
                  2
              </div>
            </div>
        </div>
        <div className="d-flex justify-content-between recent-chat-box p-2 border-bottom-1 bg-white">
          <div className="d-flex justify-content-start">
              <StyledBadge
              overlap="circle"
              anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
              }}
              variant="dot"
              >
              <Avatar alt="Naresh Kumar Gautam" className="m-2" src="https://media-exp1.licdn.com/dms/image/C4E03AQGlgtNGw1YVXw/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=AOiO0z1jN852hQhG-Ntf3ZFKO3swifQkEaiY9YQroAg" />
              </StyledBadge>
              
              <div className="mt-2">
                <p className="globle-tile chatby">
                   Naresh
                </p>
                <p className="text-muted last-chat">
                  okay bhai Acha kl kaha pr tha bhai  ane ghrr pr 
                  okay bhai Acha kl kaha pr tha bhai  ane ghrr pr 
                  okay bhai Acha kl kaha pr tha bhai  ane ghrr pr 
                </p>
              </div>
            </div>
            <div>
              <div className="time">
                10:29
              </div>
              <div className="noti pt-1 mt-2 text-center">
                  2
              </div>
            </div>
        </div>
        <div className="d-flex justify-content-between recent-chat-box p-2 border-bottom-1 bg-white">
          <div className="d-flex justify-content-start">
              <StyledBadge
              overlap="circle"
              anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
              }}
              variant="dot"
              >
              <Avatar alt="Naresh Kumar Gautam" className="m-2" src="https://media-exp1.licdn.com/dms/image/C4E03AQGlgtNGw1YVXw/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=AOiO0z1jN852hQhG-Ntf3ZFKO3swifQkEaiY9YQroAg" />
              </StyledBadge>
              
              <div className="mt-2">
                <p className="globle-tile chatby">
                   Naresh
                </p>
                <p className="text-muted last-chat">
                  okay bhai Acha kl kaha pr tha bhai  ane ghrr pr 
                  okay bhai Acha kl kaha pr tha bhai  ane ghrr pr 
                  okay bhai Acha kl kaha pr tha bhai  ane ghrr pr 
                </p>
              </div>
            </div>
            <div>
              <div className="time">
                10:29
              </div>
              <div className="noti pt-1 mt-2 text-center">
                  2
              </div>
            </div>
        </div>
        
        
      </div>
  )
} 
