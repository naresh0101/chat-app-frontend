import React, {useState } from "react";
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';
import {searchUserMsg} from "../../actions/searchAction"
import { Redirect } from "react-router-dom";


function SearchUserFrom(props) {
    let [user, setUser] = useState({});

    let handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        user[name] = value;
        setUser(user);
    }
    let search = (e) => {
        e.preventDefault();
        const payload = {
            method: 'POST',
            headers: new Headers({
                "X-Api-Key": JSON.parse(localStorage.getItem("token")),   
                'Content-Type': 'application/json' 
               }),
            body: JSON.stringify(user)
        }

        fetch('http://localhost:5000/searchuser', payload)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
             props.searchUserMsg(data)
        });
    }
    return (
        <div className="p-4">
          <h4 className="text-gray globle-tile">Chats</h4>
          <form className="search-form pl-3 p-2 mt-4" onSubmit={search}>
              <SearchIcon className="text-muted" />
              <input onChange={handleChange} name="user"  placeholder="Search messages or users" className="ml-2 p-1 bg-transparent" />
          </form> 
         <h5 className="text-gray globle-tile mt-4">Recent</h5>
      </div>
    );
}

export default connect(null,{searchUserMsg})(SearchUserFrom);
