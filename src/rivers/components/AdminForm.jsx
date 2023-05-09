import { useAuth0 } from "@auth0/auth0-react";
import { useUsers } from '../hooks/useAdmin'

export const AdminForm =()=> {
  const { user } = useAuth0();

   if(user.nickname=='admin'){ 
 
  const email = user.email;
  const [users, deleteUser] = useUsers();

  // Agrupar los usuarios por correo electrónico
  const usersByEmail = users.reduce((acc, user) => {
    if (!acc[user.email]) {
      acc[user.email] = user;
    }
    return acc;
  }, {});

  // Convertir el objeto de usuarios agrupados en una matriz
  const uniqueUsers = Object.values(usersByEmail);

  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {console.log('esto es user desde el form:', user)}
        {uniqueUsers.map((user) => {
          
         
            return (
              <tr key={user.id}>
                <td>{user.email}</td>
                <td>
                  <button className="delete-button" onClick={() => deleteUser(user.email)}>Eliminar</button>
                </td>
              </tr>
            );
        
        })}
      </tbody>
    </table>
  );}

  else {
    return (
      <>
      <h1>No tienes permiso</h1>
      </>
    )
  }
}
