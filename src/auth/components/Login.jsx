import { useAuth0 } from '@auth0/auth0-react';

/**
 * Componente que muestra un botón para iniciar sesión y utiliza Auth0 para autenticar al usuario.
 *
 * @returns {JSX.Element} El botón de inicio de sesión.
 */
export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  /**
   * Manejador de eventos para el botón de inicio de sesión que autentica al usuario y guarda los datos en localStorage.
   *
   * @returns {Promise<void>}
   */
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
