import { useAuth0 } from '@auth0/auth0-react';

function saveDataToLocalStorage(email) {
    console.log('Guardando el email en localStorage:', email);
    localStorage.setItem('userEmail', email);
    console.log('Email guardado en localStorage');
  }
  
  export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
  
    const handleClick = async () => {
      console.log('Haciendo clic en el botón LOGIN');
      const { user } = await loginWithRedirect();
      console.log('Usuario autenticado:', user);
      saveDataToLocalStorage(user.email);
    };
  
    return (
      <button onClick={handleClick}>LOGIN</button>
    );
  };
  

// Ejemplo de cómo recuperar el email guardado
const userEmail = localStorage.getItem('userEmail');
console.log(userEmail);
