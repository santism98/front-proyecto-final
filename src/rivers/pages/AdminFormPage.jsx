import { useAuth0 } from "@auth0/auth0-react";
import { AdminForm } from "../components/AdminForm";

export const AdminFormPage= () => {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <div>No estás autorizado para acceder a esta página.</div>;
  }

  // Si el usuario está autenticado, renderiza el componente UserFormPage
  return (
    <>
    
    <AdminForm/>
    
    </>
  );
};
