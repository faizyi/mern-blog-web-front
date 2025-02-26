import { getUserProfile, logout, } from "@/services/user";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('authToken');
        if (token) {
          const res = await getUserProfile(); // Fetch user details from the server
          setUser(res.data.userInfo); // Ensure the correct user object is stored
        }
      } catch (error) {
        console.log("Error fetching user profile:", error);
        setUser(null);
        localStorage.removeItem('authToken'); // Remove invalid token
      }
      setLoading(false);
    };
    fetchUser();
  }, [])

  const handleLogout = async () => {
    try {
      const res = await logout();
      console.log(res);
      setUser(null)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <AuthContext.Provider value={{ user, setUser, handleLogout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}
export const useAuth = () => useContext(AuthContext);

