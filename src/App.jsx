import React, { useState } from "react";
import Cookies from "js-cookie";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get("loggedIn"));
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    Cookies.set("username", username);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    Cookies.remove("username");
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {username}! You are logged in.</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>You are not logged in.</p>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default App;
