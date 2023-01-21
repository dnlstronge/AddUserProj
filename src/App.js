import React, {useState} from 'react';
import Adduser from './components/users/Adduser';
import UserList from './components/users/UserList';

function App() {
  const [usersList, setUsersList] = useState([])
  const addUserHandler = (uName, uAge ) => {
    setUsersList((prev) => {
      return [...prev, {username: uName, age: uAge}]
    })
  }

  return (
    <div>
      <Adduser onAddUser={addUserHandler}/>
      <UserList users={usersList}/>
    </div>
  );
}

export default App;
