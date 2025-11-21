import { createContext, useState } from "react";
import AuthService from "../services/AuthService";

type AuthContextType = {
  isAuth: boolean
  login: (u: string, p: string) => Promise<void>
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: any }) {
  const [isAuth, setIsAuth] = useState(AuthService.isAuthenticated());

  const login = async (username: string, password: string) => {
    await AuthService.login(username, password);
    setIsAuth(true);
  };

  const logout = () => {
    AuthService.logout();
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
