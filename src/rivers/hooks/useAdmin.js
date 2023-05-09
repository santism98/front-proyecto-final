/**
 * Hook que obtiene la lista de usuarios y permite eliminar un usuario por email.
 * @param {string} email - Email del usuario a eliminar (opcional).
 * @returns {Array} - Array con la lista de usuarios y la función para eliminar un usuario.
 */
import { useState, useEffect } from 'react';

export const useUsers = (email) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    /**
     * Función async para obtener la lista de usuarios y actualizar el estado.
     */
    const fetchUsers = async () => {
      try {
        const response = await fetch(`https://bac-proyecto-final.onrender.com/admin/usuarios`);
        const data = await response.json();
        setUsers(data);
        console.log('esto es el use:', data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  /**
   * Función async para eliminar un usuario por email y actualizar el estado.
   * @param {string} email - Email del usuario a eliminar.
   */
  const deleteUser = async (email) => {
    try {
      const res = await fetch(`https://bac-proyecto-final.onrender.com/admin/delete?email=${email}`, {
        method: "DELETE",
      });
      const data = await res.json();
      console.log(data);

      setUsers((prevState) => prevState.filter((user) => user.email !== email));
    } catch (error) {
      console.error(error);
    }
  };
  
  return [users, deleteUser];
};
