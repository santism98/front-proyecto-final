

import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton } from '../components/Login';
import { LogoutButton } from '../components/Logout';


export const LoginPage = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('http://localhost:5173/user');
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      {isAuthenticated ? (
        <p>You are authenticated. Redirecting...</p>
      ) : (
        <>
          <LoginButton />
          <LogoutButton />
        </>
      )}
    </>
  );
};


