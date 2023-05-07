import { useState, useEffect } from "react";

export const useUserForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    provincia: "",
    rio: "",
    tramo: "",
    fecha: "",
    capturas_rs: "",
    talla_media: "",
    ninfa1: "",
    mosca1: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/user/agregar", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);

      // Actualizamos el estado `state` con los nuevos datos
      setState([...state, data]);

      setFormData({
        id: "",
        provincia: "",
        rio: "",
        tramo: "",
        fecha: "",
        capturas_rs: "",
        talla_media: "",
        ninfa1: "",
        mosca1: "",
      });
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
      console.log('este es el id: ', id)
      const data = await res.json();
      console.log('esto es data:', data);
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

      setState((prevState) =>
        prevState.filter((info) => info.id !== id)
      );
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const res = await fetch("http://localhost:3000/todos");
        const data = await res.json();
        setState(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchInfo();
  }, []);

  return { formData, handleChange, handleSubmit, handleUpdate, handleDelete, state };
};
