import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Check if token and user exist in localStorage on load
    const savedToken = localStorage.getItem('tripmate_jwt_token');
    const savedUser = localStorage.getItem('tripmate_user_profile');

    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    } else {
      // Default initial mock user so you're logged in as Aditya Panna
      const defaultUser = { name: 'Aditya Panna', email: 'aditya@tripmate.com' };
      const defaultToken = 'mock_jwt_token_abc123xyz789';
      
      localStorage.setItem('tripmate_jwt_token', defaultToken);
      localStorage.setItem('tripmate_user_profile', JSON.stringify(defaultUser));
      setUser(defaultUser);
      setToken(defaultToken);
    }
  }, []);

  const login = (email, name = 'Aditya Panna') => {
    const mockToken = 'mock_jwt_token_' + Math.random().toString(36).substring(7);
    const userData = { name, email };

    localStorage.setItem('tripmate_jwt_token', mockToken);
    localStorage.setItem('tripmate_user_profile', JSON.stringify(userData));
    setToken(mockToken);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('tripmate_jwt_token');
    localStorage.removeItem('tripmate_user_profile');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}