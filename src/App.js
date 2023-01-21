import React, {useState} from 'react';
import Adduser from './components/users/Adduser';
import UserList from './components/users/UserList';

function App() {
  const [usersList, setUsersList] = useState([])
  return (
    <div>
      <Adduser />
      <UserList users={[]}/>
    </div>
  );
}

export default App;
