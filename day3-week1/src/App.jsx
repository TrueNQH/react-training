import { useState } from "react";
import UserList from "./UserList";
import UserSearch from "./UserSearch";
export default function App() {


  return (
    <div>
      <h1>User Search</h1>
      <UserSearch />
      <h1>User List</h1>
      <UserList />  
    </div>
  );
}
