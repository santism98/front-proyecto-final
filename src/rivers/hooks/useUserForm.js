
/**

Hook personalizado que maneja el formulario de ingreso de datos del usuario.
@returns {object} Objeto con las siguientes propiedades:
formData: objeto que contiene los valores actuales del formulario.
handleChange: función que maneja el cambio de valores en el formulario.
handleSubmit: función que maneja el envío del formulario.
handleUpdate: función que maneja la actualización de un elemento en el estado.
handleDelete: función que maneja la eliminación de un elemento en el estado.
state: array que contiene los datos del usuario.
*/



import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const useUserForm = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [formData, setFormData] = useState({
    id: "",
    provincia: "",
    rio: "",
    tramo: "",
    fecha: "",
    capturas_rs: "",
    talla_media: "",
    ninfa1: "",
    seca1: "",
  });

  const [state, setState] = useState([]);

  const [editingId, setEditingId] = useState(null); // Nuevo estado

  const handleEdit = (id) => {
    setEditingId(id);
  };

  /**

Función que se ejecuta cuando se cambia un valor en el formulario.
@param {object} e - El evento del cambio.
*/

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  /**

Función que se ejecuta cuando se envía el formulario.
*/

  const handleSubmit = async () => {
    try {
      const { id, ...dataToSend } = formData;

      dataToSend.user_email = user.email; // Añade el email del usuario a los datos
      console.log("esto es data to send:", dataToSend);
      const res = await fetch("https://bac-proyecto-final.onrender.com/user/agregar", {
        method: "POST",
        body: JSON.stringify(dataToSend),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setFormData({
        provincia: "",
        rio: "",
        tramo: "",
        fecha: "",
        capturas_rs: "",
        talla_media: "",
        ninfa1: "",
        seca1: "",
      });
      setState([...state, data]); // llama a setState una sola vez
    } catch (err) {
      console.error(err);
    }
  };

  /**

Función que se ejecuta cuando se actualiza un elemento en el estado.
@param {number} id - El ID del elemento a actualizar.
@param {object} formData - El objeto con los nuevos valores para el elemento.
*/


  const handleUpdate = async (id, formData) => {
    console.log('ESTE ES EL ID A EDITAR:', id)
    try {
      const res = await fetch(`https://bac-proyecto-final.onrender.com/user/actualizar?id=${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("este es el id: ", id);
      const data = await res.json();
      console.log("esto es data:", data);
    } catch (err) {
      console.error(err);
    }
  };
  /**

Función que se ejecuta cuando se actualiza un elemento en el estado.
@param {number} id - El ID del elemento a eliminar.

*/

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`https://bac-proyecto-final.onrender.com/user/delete?id=${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      console.log(data);

      setState((prevState) => prevState.filter((info) => info.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const fetchInfo = async () => {
    try {
      const email = user.email;
      const res = await fetch(`https://bac-proyecto-final.onrender.com/email?email=${email}`);
      const data = await res.json();
      setState(data);
    } catch (err) {
      console.error(err);
    }
  };

  


  useEffect(() => {
    fetchInfo();
  }, []);

  return { formData, handleChange, handleSubmit, handleUpdate, handleDelete, state };
};
