import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

export default function LoginPage() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("AuthContext missing");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await ctx.login(username, password);
      const returnUrl = location.state?.from || "/profile";
      navigate(returnUrl);
    } catch (err: any) {
      console.log("error: ", err.message);
      setError(err.message);
    }
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </>
  );
}
