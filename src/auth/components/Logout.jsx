import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

/**
 * Componente que muestra un botón para cerrar sesión y utiliza Auth0 para desautenticar al usuario.
 *
 * @returns {JSX.Element} El botón de cierre de sesión.
 */
export const LogoutButton = () => {
  const { logout } = useAuth0();

  /**
   * Manejador de eventos para el botón de cierre de sesión que desautentica al usuario y redirige a la página de inicio.
   *
   * @returns {Promise<void>}
   */
  const handleLogout = async () => {
    await logout({
      returnTo: 'http://localhost:5173/'
    });
    window.location.assign('http://localhost:5173/');
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};
