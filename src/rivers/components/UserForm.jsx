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
              <td>{user.seca1}</td>
              
              <td>
                <button className="bg-blue-500 mr-4" type="button" onClick={() => handleEdit(user.id)}>Editar</button>
                <button className="bg-blue-500 mr-4" type="button" onClick={() => handleDelete(user.id)}>Eliminar</button>
              </td>
            </tr>

          ))}
        </tbody>
      </table>

   


      {editingId && (
        <form >
          
          <input type="text" name="provincia" placeholder="Provincia" value={formData.provincia.toUpperCase()} onChange={handleChange} />
<input type="text" name="rio" placeholder="Río" value={formData.rio} onChange={handleChange} />
<input type="text" name="tramo" placeholder="Tramo" value={formData.tramo} onChange={handleChange} />
<input type="date" name="fecha" placeholder="Fecha" value={formData.fecha} onChange={handleChange} />
<input type="text" name="capturas_rs" placeholder="Capturas" value={formData.capturas_rs} onChange={handleChange} />
<input type="text" name="talla_media" placeholder="Talla Media" value={formData.talla_media} onChange={handleChange} />
<input type="text" name="ninfa1" placeholder="Ninfa 1" value={formData.ninfa1} onChange={handleChange} />
<input type="text" name="seca1" placeholder="Seca 1" value={formData.seca1} onChange={handleChange} />
<button className="bg-blue-500" type="submit" onClick={() => handleUpdate(editingId, formData)}>Actualizar</button>



        </form>
      )}
 <button className="bg-blue-500" onClick={() => setaddData(true)}>AÑADIR</button>
      {addData && (
        <form onSubmit={handleFormSubmit} class="grid grid-cols-2 gap-4">
        <p class="p-2">Provincia</p>
        <input
          type="text"
          name="provincia"
          value={formData.provincia.toUpperCase()}
          onChange={handleChange}
          class="p-2 border border-gray-400 rounded-md"
        />
        <p class="p-2">Río</p>
        <input
          type="text"
          name="rio"
          value={formData.rio.toUpperCase()}
          onChange={handleChange}
          class="p-2 border border-gray-400 rounded-md"
        />
        <p class="p-2">Tramo</p>
        <input
          type="text"
          name="tramo"
          value={formData.tramo.toUpperCase()}
          onChange={handleChange}
          class="p-2 border border-gray-400 rounded-md"
        />
        <p class="p-2">Fecha</p>
        <input
          type="date"
          name="fecha"
          value={formData.fecha}
          onChange={handleChange}
          class="p-2 border border-gray-400 rounded-md"
        />
        <p class="p-2">Capturas</p>
        <input
          type="integer"
          name="capturas_rs"
          value={formData.capturas_rs}
          onChange={handleChange}
          class="p-2 border border-gray-400 rounded-md"
        />
        <p class="p-2">Talla Media</p>
        <input
          type="numeric"
          name="talla_media"
          value={formData.talla_media}
          onChange={handleChange}
          class="p-2 border border-gray-400 rounded-md"
        />
        <p class="p-2">Ninfa 1</p>
        <input
          type="text"
          name="ninfa1"
          value={formData.ninfa1}
          onChange={handleChange}
          class="p-2 border border-gray-400 rounded-md"
        />
        <p class="p-2">Seca 1</p>
        <input
          type="text"
          name="seca1"
          value={formData.seca1}
          onChange={handleChange}
          class="p-2 border border-gray-400 rounded-md"
        />
        <button className="bg-blue-500" type="submit" onClick={() => handleSubmit(formData)} class="p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          GUARDAR
        </button>
      </form>
      
      )}


      
    </div>
  );
};
