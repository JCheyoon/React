import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener } from "../Utils/Firebase/Firebase.utils";

//actual value that you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
      setCurrentUser(user);
    });
    return unSubscribe;
  }, []); // whenever auth changes wants set user

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
