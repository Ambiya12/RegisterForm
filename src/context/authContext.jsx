import { useState, useEffect, createContext } from "react";
import axios from 'axios';
import { useNavigate } from "react-router";

export const AuthContext = createContext(null);

export const AuthController = ({ children }) => {
  let navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSignIn = async (e, email, password) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:8000/api/login/', {email, password });
        if (response.status === 200) {
            console.log(response)
            localStorage.setItem('token', response.data)
            setIsAuthenticated(true)
            navigate('/home');
        }
    } catch (err) {
        console.log(err.response.data);
        if (err) {
            alert(err.response.data);
        }
    }
};

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, handleSignIn, handleLogout}}>
      {children}
    </AuthContext.Provider>
  );
};
