import { useNavigate } from "react-router";
import AuthService from "../services/AuthService";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function ProfilePage() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("AuthContext missing");

  const tokenInfo = AuthService.tokenInfo();

  const navigate = useNavigate();

  const handleLogout = () => {
    ctx.logout();
    navigate("/login");
  };

  return (
    <>
      <p>{tokenInfo}</p>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
