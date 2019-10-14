import React, { useState } from 'react';
import './App.css';
import UserOutput from './User/Component/UserOutput/UserOutput';

const app = props => {
  const [usersState] = useState({
    users: [
      {quote: 'Talk is cheap. Show me the code', name: 'Linus Torvalds'},
      {quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live', name: 'John Woods'},
      {quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand', name: 'Martin Fowler'},
      {quote: 'I\'m not a great programmer; I\'m just a good programmer with great habits', name: 'Kent Beck'},
      {quote: 'That\'s the thing about people who think they hate computers. What they really hate is lousy programmers', name: 'Larry Niven'},
      {quote: 'Truth can only be found in one place: the code', name: 'Robert C. Martin'}
    ]
  });

  return (
    <div className="App">
      <UserOutput
        user={usersState.users[0]} />
      <UserOutput
        user={usersState.users[1]} />
      <UserOutput
        user={usersState.users[2]} />
      <UserOutput
        user={usersState.users[3]} />
      <UserOutput
        user={usersState.users[4]} />
      <UserOutput
        user={usersState.users[5]} />
    </div>
  );
}


export default app;
