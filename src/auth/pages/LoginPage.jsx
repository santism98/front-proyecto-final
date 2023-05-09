/**

React component for Login page.
Redirects to user page if user is authenticated, otherwise displays Login and Logout buttons.
@returns JSX element
*/

import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton } from '../components/Login';
import { LogoutButton } from '../components/Logout';

/**
* Redirects user to user page if authenticated
* @param {boolean} isAuthenticated - Flag to indicate if user is authenticated
* @param {object} navigate - Function to navigate to user page
*/
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


