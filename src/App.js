import React from 'react';
import Adduser from './components/users/Adduser';
import UserList from './components/users/UserList';

function App() {
  return (
    <div>
      <Adduser />
      <UserList users={[]}/>
    </div>
  );
}

export default App;
