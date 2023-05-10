import { useState } from "react";
import { UserContext } from "./UserContext";

/**
 * Componente proveedor del estado del usuario.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Los nodos hijos que este componente provee.
 * @returns {JSX.Element} El componente proveedor del estado del usuario.
 */
export const UserProvider = ({ children }) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={{ isLoggedIn, setisLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
