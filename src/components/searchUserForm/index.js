import React  from "react";
import SearchIcon from '@material-ui/icons/Search';

export default function SearchUserForm() {

  return (
         <form className="search-form pl-3 p-2 mt-4">
            <SearchIcon className="text-muted" />
            <input  placeholder="Search messages or users" className="ml-2 p-1 bg-transparent" />
          </form> 
  )
} 
