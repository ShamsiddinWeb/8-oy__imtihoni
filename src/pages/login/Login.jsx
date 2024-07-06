import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "john32" && password === "87654321") {
      localStorage.setItem("x-auth-token", "your-auth-token");
      navigate("/admin");
    } else {
      alert("Xato kiritildi");
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    
    <div className="login">
      <div className="container">
        <form onSubmit={handleLogin} className="login__start">
          <h2>Login</h2>
          <input
            type="text"
            placeholder="john32"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="87654321"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
