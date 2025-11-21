const USER = {
  username: "admin",
  password: "1234",
};

const AuthService = {
  login: async (username: string, password: string) => {
    if (username === USER.username && password === USER.password) {
      const token = btoa(
        JSON.stringify({ user: username, exp: Date.now() + 3600000 })
      );
      localStorage.setItem("token", token);
      return token;
    }
    throw new Error("Invalid credentials");
  },

  logout: () => {
    localStorage.removeItem("token");
  },

  getToken: () => {
    return localStorage.getItem("token");
  },

  isAuthenticated: () => {
    const token = localStorage.getItem("token");
    if (!token) return false;
    try {
      const decoded = JSON.parse(atob(token));
      return decoded.exp > Date.now();
    } catch {
      return false;
    }
  },

  tokenInfo: () => {
    const token = localStorage.getItem("token");
    if (!token) return "-";
    return JSON.stringify(atob(token));
  },
};

export default AuthService;
