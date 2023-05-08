import { useAuth0 } from "@auth0/auth0-react";
import { useUsers } from '../hooks/useAdmin'

export const AdminForm =()=> {
  const { user } = useAuth0();
  const email = user.email;
  const [users, deleteUser] = useUsers();

  return (
    <table className="user-table">
  <thead>
    <tr>
      
      <th>Email</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user) => (
      <tr key={user.id}>
      
        <td>{user.user_email}</td>
        <td>
          {email === user.user_email && (
            <button className="delete-button" onClick={() => deleteUser(user.id)}>Eliminar</button>
          )}
        </td>
      </tr>
    ))}
  </tbody>
</table>

  );
}
