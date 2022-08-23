import React, { useState } from "react";
import AddUser from "./Componets/Users/AddUser";
import UserList from "./Componets/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </>
  );
}

export default App;
