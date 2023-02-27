import { useState, createContext } from 'react';

export const UserContext = createContext({ user: {}, setUser: () => {} });

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  return (
    <UserContextProvider value={{ user, setUser }}>
      {children}
    </UserContextProvider>
  );
};
