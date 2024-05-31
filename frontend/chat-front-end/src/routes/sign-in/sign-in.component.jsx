import axios from "axios";
import React, { useState } from "react";
import "./sign-in.styles.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation example
    if (!email || !password) {
      setError("Both fields are required");
      return;
    }

    setError("");
    axios
      .post("http://localhost:5000/api/auth/login", {
        username: email,
        password,
      })
      .then((res) => {
        const { token } = res.data;
        console.log("Server response: ", token);
        localStorage.setItem("token", token);
      })
      .catch((err) => {
        console.log("Server respondend with error: ", err);
      });
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
