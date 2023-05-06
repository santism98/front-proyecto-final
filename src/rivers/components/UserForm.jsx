import { useState, useEffect } from "react";
import { useUserForm } from "../hooks/useUserForm";

export const UserForm =()=> {
  const { formData, handleChange, handleSubmit, handleUpdate, handleDelete, state } = useUserForm();
  const [editingId, setEditingId] = useState(null); // Nuevo estado

  const handleEdit = (id) => {
    setEditingId(id);
  };

  return (
    <div>
      <table className="table-container">
        <thead>
          <tr>
            <th>ID</th>
            <th>Provincia</th>
            <th>Río</th>
            <th>Tramo</th>
            <th>Fecha</th>
            <th>Capturas RS</th>
            <th>Talla media</th>
            <th>Ninfa 1</th>
            <th>Mosca 1</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {state.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.provincia}</td>
              <td>{user.rio}</td>
              <td>{user.tramo}</td>
              <td>{user.fecha}</td>
              <td>{user.capturas_rs}</td>
              <td>{user.talla_media}</td>
              <td>{user.ninfa1}</td>
              <td>{user.mosca1}</td>
              <td>
                <button type="button" onClick={() => handleEdit(user.id)}>Editar</button>
                <button type="button" onClick={() => handleDelete(user.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editingId && (
        <form onSubmit={handleUpdate}>
         <p>Provincia</p> <input  type="text" name="provincia" value={formData.provincia} onChange={handleChange} />
          <input type="text" name="rio" value={formData.rio} onChange={handleChange} />
          <input type="text" name="tramo" value={formData.tramo} onChange={handleChange} />
          <input type="text" name="fecha" value={formData.fecha} onChange={handleChange} />
          <input type="text" name="capturas_rs" value={formData.capturas_rs} onChange={handleChange} />
          <input type="text" name="talla_media" value={formData.talla_media} onChange={handleChange} />
          <input type="text" name="ninfa1" value={formData.ninfa1} onChange={handleChange} />
          <input type="text" name="mosca1" value={formData.mosca1} onChange={handleChange} />
          <button type="submit">Actualizar</button>
        </form>
      )}
    </div>
  );
};
