import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.length > 0 && userEmail.length > 0) {
      console.log(userName, userEmail);
    } else {
      console.log("Enter the values correctly");
    }
  };

  return (
    <div className="App">
      <h1>LOGIN</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="userName"
            value={userName}
            placeholder="user name"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div>
          <input
            type="email"
            name="userEmail"
            value={userEmail}
            placeholder="user email"
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>

        <div>
          <button type="submit">Submit Details</button>
        </div>
      </form>
    </div>
  );
}
