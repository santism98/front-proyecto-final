import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={{ isLoggedIn, setisLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
