import { useState, useEffect } from 'react';

export const useUsers = (email) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(`http://localhost:3000/admin/usuarios`);
      const data = await response.json();
      setUsers(data);
      console.log('esto es el use:', data)
    };

    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    const response = await fetch(`http://localhost:3000/admin/delete?email=${email}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, id }),
    });

    if (response.ok) {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      return true;
    } else {
      console.error('Error deleting user:', response.statusText);
      return false;
    }
  };

  return [users, deleteUser];
};
