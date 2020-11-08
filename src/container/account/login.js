
import React, { useState, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import Assets from "../../assets"
import "./index.css";


function Login() {
    var [Alert, setAlert] = useState("hi")
    var [displayStatus, setDisplay] = useState("none")

    let [user, setUser] = useState({
        password: '',
        email : '',
      });

      let handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        user[name] = value;
        setUser(user);
      }
      let LoginForm = (e)=>{
        e.preventDefault();
        const payload = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user)
        };
      fetch('http://localhost:5000/login', payload)
          .then(response => response.json())
          .then((data)=>{
            if(data.success){
              console.log(data);
              localStorage.setItem("user", JSON.stringify (data.user) )
              localStorage.setItem("token", JSON.stringify (data.user.api_key) )
              window.location.reload()
            }else{
              alert(data.message)
            }
          });
        
     }
     if(localStorage.getItem("token")){
        return <Redirect to="/" />
     }
      return (
        <Fragment>
                <div className="container ">
                    <div className="account-contain">

                    <div className="row shadow" >
                       <div className="col-md-6 p-4">
                            <img className="w-100-per" src={Assets.Accountimage} />
                       </div>
                       <div className="col-md-6 p-4 bg-light">
                            <p className="float-right">Don't have account ?  <Link to="/signup" > Create </Link> </p>
                            <br/>
                            <br/>
                            <br/>
                            <center>
                              <h3 className="text-muted">
                                Welcome back !
                              </h3>
                            </center>
                           <form onSubmit={LoginForm}>
                                <input onChange={handleChange} name="email"  placeholder="Email@example.com" type="email" className=" bg-light mt-4 p-2 border-bottom form-control"  />
                                <input onChange={handleChange}  name="password" placeholder="Password " type="password" className=" bg-light mt-2 p-2 border-bottom form-control"   />
                                <br/>
                                
                               <div className="d-flex justify-content-between">
                                  <button type="submit" className="btn btn-primary">
                                    Login
                                  </button>

                                  <Link to="/Forgot password" className="text-muted float-right" > <span className="text-min">Forgot password ?</span></Link>

                               </div>
                            </form>
                        </div>
                   </div>
                  
                </div>
                </div>
              
        </Fragment>
      );
    
}
export default Login;



