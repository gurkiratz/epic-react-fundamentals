// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react';

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('');
  const usernnameValueRef = React.useRef(null);
  // const [error, setError] = React.useState(null);
  // const [disable, setDisable] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    // const value = event.target.elements.usernameInput.value;
    const value = usernnameValueRef.current.value;
    onSubmitUsername(value);
  }

  function handleChange(event) {
    const value = event.target.value;
    setUsername(value.toLowerCase());
    // setError(isLowercase ? null : 'Username must be lower case');
    // setDisable(isLowercase ? false : true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          onChange={handleChange}
          value={username}
          ref={usernnameValueRef}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
