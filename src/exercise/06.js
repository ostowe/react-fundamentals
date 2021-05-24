// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({ onSubmitUsername }) {
  const [username, setUsername] = React.useState('');
  const usernameRef = React.useRef(null);
  const onSubmit = () => {
    onSubmitUsername(usernameRef.current.value);
  };
  const onChange = (event) => {
    const { value } = event.target;
    const valueNormalized = value.toLowerCase();
    setUsername(valueNormalized);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          ref={usernameRef}
          onChange={onChange}
          value={username}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
