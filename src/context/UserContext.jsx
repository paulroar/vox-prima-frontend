import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');

    if (token && name && email) {
      setUser({ name, email, token });
    }
  }, []);

  const login = (userData) => {
    const { token, user } = userData;

    localStorage.setItem('token', token);
    localStorage.setItem('name', user.name);
    localStorage.setItem('email', user.email);
    setUser({ name: user.name, email: user.email, token });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
