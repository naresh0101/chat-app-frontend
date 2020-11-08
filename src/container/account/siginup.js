
import React, { useState, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import Assets from "../../assets"
import "./index.css";


function Signup() {
    let [sendToLogin, setLogin] = useState(false)
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
      let SignupForm = (e)=>{
        e.preventDefault();
        const payload = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user)
        };
      fetch('http://localhost:5000/signup', payload)
          .then(response => response.json())
          .then((data)=>{
            if(data.success){
              setLogin(true)
            }else{
              alert(data.message)
            } 

          });
     }
     if(sendToLogin){
        return <Redirect to="/login" />
     }
      return (
        <Fragment>
                <div className="container">
                    <div className="account-contain">
                    <div className="row shadow" >
                       <div className="col-md-6 p-4">
                            <img className="w-100-per" src={Assets.Accountimage} />
                       </div>
                       <div className="col-md-6 p-4 bg-light">
                            <p className="float-right">I have account  <Link to="/login" > Login </Link> </p>
                            <br/>
                            <br/>
                            <br/>
                            <center>
                              <h3 className="text-muted">
                                You are gonna connect to world
                              </h3>
                            </center>
                           <form onSubmit={SignupForm} className="p-4">
                                <input onChange={handleChange} name="name"  placeholder="Full name" type="text" className=" bg-light mt-4 p-2 border-bottom form-control"  />
                                <input onChange={handleChange} name="email"  placeholder="Email@example.com" type="email" className=" bg-light mt-2 p-2 border-bottom form-control"  />
                                <input onChange={handleChange}  name="avatar" placeholder="Your Avatar link " type="text" className=" bg-light mt-2 p-2 border-bottom form-control"   />
                                <input onChange={handleChange}  name="password" placeholder="Password " type="password" className=" bg-light mt-2 p-2 border-bottom form-control"   />
                                <br/>
                                
                               <div className="d-flex justify-content-between">
                                  <button type="submit" className="btn btn-primary">
                                    Signup
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
export default Signup;



