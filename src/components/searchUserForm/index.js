import React  from "react";
import SearchIcon from '@material-ui/icons/Search';

export default function SearchUserForm() {

  return (
      <div className="p-4">
          <h4 className="text-gray globle-tile">Chats</h4>
          <form className="search-form pl-3 p-2 mt-4">
              <SearchIcon className="text-muted" />
              <input  placeholder="Search messages or users" className="ml-2 p-1 bg-transparent" />
          </form> 
         <h5 className="text-gray globle-tile mt-4">Recent</h5>
      </div>
        
  )
}