import { Link, Route, Routes } from "react-router";
import "./App.css";
import PublicPage from "./pages/PublicPage";
import ProtectedPage from "./pages/ProtectedPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import ProfilePage from "./pages/ProfilePage";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {

  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("AuthContext missing");

  return (
    <>
      <nav>
        <Link to="/">Public</Link> | <Link to="/protected">Protected</Link> | {" "}
        {ctx.isAuth ? (
          <Link to="/profile">Profile</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<PublicPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route
          path="/protected"
          element={
            <ProtectedRoute>
              <ProtectedPage />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
