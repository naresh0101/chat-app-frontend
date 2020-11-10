import React, { Fragment }  from "react";
import { Avatar, Button } from "@material-ui/core";

export default function Logout() {

  const user = JSON.parse(localStorage.getItem("user"))

  const logout = ()=>{
    localStorage.clear()
    window.location.reload()
  }
  return (
      <Fragment>
      <div className="logout-btn sticky-bottom">
          <div className="d-flex justify-content-between p-2 border-bottom-1 bg-white ">
          <div className="d-flex justify-content-between mx-4 bg-light">
              <div className="mt-2">
                    <Button  fullWidth color="secondary" onClick={logout}>
                    👋 Logout ! 
                  </Button>
              </div>
              <Avatar style={{color:"blue"}} alt={user.name} className="mx-4" src={user.avatar} />
            </div>
        </div>
      </div>
      </Fragment>
  )
} 
