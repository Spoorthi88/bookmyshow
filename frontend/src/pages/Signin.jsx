import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignin = () => {
    alert("Button clicked");
    if (username === "admin" && password === "12345") {
      navigate("/theatre");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div>
      <h1>Sign In</h1>

      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSignin}>
        Sign In
      </button>
    </div>
  );
}

export default Signin;

