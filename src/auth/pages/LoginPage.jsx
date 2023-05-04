import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const LoginPage = () => {
  const { isLoggedIn, setisLoggedIn } = useContext(UserContext);
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setErrors([]);

    const userLogin = {
      name: ev.target.name.value,
      email: ev.target.email.value,
      password: ev.target.password.value,
    };

    //validate that not empty
    if (userLogin.email == "") {
      setErrors("Please fill in email");
      return;
    } else if (userLogin.password == "") {
      setErrors("User or password incorrect");
      return;
    } else if (userLogin.name == "") {
      setErrors("Please fill in name");
      return;
    }
    setisLoggedIn(true);
  };

  

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <input type="text" id="name" name="name" placeholder="Nombre" />
        <input type="text" id="email" name="email" placeholder="Email" />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
        <button className="bg-green" type="submit">
          Login
        </button>
      </form>
    </>
  );
};
