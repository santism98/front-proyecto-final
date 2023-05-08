import { useState } from "react";
import { useUserForm } from "../hooks/useUserForm";
import { useAuth0 } from "@auth0/auth0-react";

export const UserForm = () => {
  const { formData, handleChange, handleSubmit, handleUpdate, handleDelete, state } = useUserForm();
  const [editingId, setEditingId] = useState(null);

  const handleEdit = (id) => {
    setEditingId(id);
  };
  const [addData, setaddData] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();

  const handleFormSubmit = () => {
    
    //handleSubmit(formData);
    setaddData(false);
   // console.log(formData)
   
  };
 

  
  return (
    <div>
     { isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
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
            <th>Mosca Seca 1</th>
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
              
              <td>
                <button type="button" onClick={() => handleEdit(user.id)}>Editar</button>
                <button type="button" onClick={() => handleDelete(user.id)}>Eliminar</button>
              </td>
            </tr>

          ))}
        </tbody>
      </table>

   


      {editingId && (
        <form >
          <p>Provincia</p>
          <input type="text" name="provincia" value={formData.provincia} onChange={handleChange} />
          <input type="text" name="rio" value={formData.rio} onChange={handleChange} />
          <input type="text" name="tramo" value={formData.tramo} onChange={handleChange} />
          <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} />
          <input type="integer" name="capturas_rs" value={formData.capturas_rs} onChange={handleChange} />
          <input type="text" name="talla_media" value={formData.talla_media} onChange={handleChange} />
          <input type="text" name="ninfa1" value={formData.ninfa1} onChange={handleChange} />
          <input type="text" name="seca1" value={formData.seca1} onChange={handleChange} />
          <button type="submit" onClick={() => handleUpdate(editingId, formData)}>Actualizar</button>



        </form>
      )}
 <button onClick={() => setaddData(true)}>AÑADIR</button>
      {addData && (
        <form onSubmit={handleFormSubmit}>
          <p>Provincia</p>
          <input
            type="text"
            name="provincia"
            value={formData.provincia}
            onChange={handleChange}
          />
          <input
            type="text"
            name="rio"
            value={formData.rio}
            onChange={handleChange}
          />
          <input
            type="text"
            name="tramo"
            value={formData.tramo}
            onChange={handleChange}
          />
          <input
            type="date"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
          />
          <input
            type="integer"
            name="capturas_rs"
            value={formData.capturas_rs}
            onChange={handleChange}
          />
          <input
            type="numeric"
            name="talla_media"
            value={formData.talla_media}
            onChange={handleChange}
          />
          <input
            type="text"
            name="ninfa1"
            value={formData.ninfa1}
            onChange={handleChange}
          />
          <input
            type="text"
            name="seca1"
            value={formData.seca1}
            onChange={handleChange}
          />
          <button type="submit" onClick={() => handleSubmit(formData)}>GUARDAR</button>
        </form>
      )}


      
    </div>
  );
};
