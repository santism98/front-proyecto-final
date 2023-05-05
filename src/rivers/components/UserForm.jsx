import { useState, useEffect } from "react";
import { useUserForm } from "../hooks/useUserForm";

export const UserForm =()=> {
 // const [records, setRecords] = useState([]);
  

  const { formData, handleChange, handleSubmit, handleUpdate, handleDelete, state } = useUserForm();

  // const fetchRecords = async () => {
  //   try {
  //     const res = await fetch("http://localhost:3000/todos");
  //     const data = await res.json();
  //     setRecords(data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };


  // useEffect(() => {
    
  //   fetchRecords();
  // }, [records]);
  
  

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
          {state.map((states) => (
            <tr key={states.id}>
              <td>{states.id}</td>
              <td>{states.provincia}</td>
              <td>{states.rio}</td>
              <td>{states.tramo}</td>
              <td>{states.fecha}</td>
              <td>{states.capturas_rs}</td>
              <td>{states.talla_media}</td>
              <td>{states.ninfa1}</td>
              <td>{states.mosca1}</td>
              <td>
                <button type="button" onClick={handleUpdate}>Editar</button>
                <button type="button" onClick={() => handleDelete(states.id)}>Eliminar</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>)}
