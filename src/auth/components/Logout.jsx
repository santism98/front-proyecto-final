import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const LogoutButton = () => {
  const { logout } = useAuth0();

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


