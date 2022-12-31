import { createContext, useState } from "react";

export const userContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  let value = { currentUser, setCurrentUser };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
