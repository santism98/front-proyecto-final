import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../auth/context/UserContext";

export const NavBar = () => {
  const { isLoggedIn, setisLoggedIn } = useContext(UserContext);
  const logInUser = () => {
    setisLoggedIn(false);
  };
  return (
    <nav className="bg-green">
      <ul className="flex-row jst-cntr">
        {/* <li className="mg-md">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? "isActive" : ""} `
            }
          >
            Home
          </NavLink>
        </li> */}

        <li>
          <NavLink
            to="/rios"
            className={({ isActive }) =>
              `nav-link ${isActive ? "isActive" : ""} `
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              `nav-link ${isActive ? "isActive" : ""} `
            }
          >
            Consejos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mapa"
            className={({ isActive }) =>
              `nav-link ${isActive ? "isActive" : ""} `
            }
          >
            Mapa
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/today"
            className={({ isActive }) =>
              `nav-link ${isActive ? "isActive" : ""} `
            }
          >
            ¿DÓNDE VOY HOY?
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ranking"
            className={({ isActive }) =>
              `nav-link ${isActive ? "isActive" : ""} `
            }
          >
            Ranking de tramos
          </NavLink>
        </li>
        <li>
          <NavLink className="bg-green" onClick={logInUser}>
            LogIn
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
