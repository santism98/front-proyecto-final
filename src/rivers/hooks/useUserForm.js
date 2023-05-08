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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const { id, ...dataToSend } = formData;

      dataToSend.user_email = user.email; // Añade el email del usuario a los datos
      console.log("esto es data to send:", dataToSend);
      const res = await fetch("http://localhost:3000/user/agregar", {
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

  const handleUpdate = async (id, formData) => {
    try {
      const res = await fetch(`http://localhost:3000/user/actualizar?id=${id}`, {
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

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/user/delete?id=${id}`, {
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
      const res = await fetch(`http://localhost:3000/email?email=${email}`);
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
