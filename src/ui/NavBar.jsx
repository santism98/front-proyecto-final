import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../auth/components/Login";
import { LogoutButton } from "../auth/components/Logout";

export const NavBar = () => {
  const { isAuthenticated, logout } = useAuth0();

  return (
    
    <nav className="bg-green">
      
      <div className="menu-icon">
        <i className="fa fa-bars"></i>
      </div>
      <ul className="flex-row jst-cntr">
        <li>
          <NavLink
            to="/rios"
            className={({ isActive }) =>
              `nav-link letra-nav ${isActive ? "isActive" : ""} `
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              `nav-link letra-nav ${isActive ? "isActive" : ""} `
            }
          >
            Consejos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mapa"
            className={({ isActive }) =>
              `nav-link letra-nav ${isActive ? "isActive" : ""} `
            }
          >
            Mapa
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/today"
            className={({ isActive }) =>
              `nav-link letra-nav ${isActive ? "isActive" : ""} `
            }
          >
            ¿DÓNDE VOY HOY?
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ranking"
            className={({ isActive }) =>
              `nav-link letra-nav ${isActive ? "isActive" : ""} `
            }
          >
            Ranking de tramos
          </NavLink>
        </li>
        <li>
          {isAuthenticated ? (
            <LogoutButton onLogout={() => logout({ returnTo: "http://localhost:5173/" })} />
          ) : (
            <LoginButton />
          )}
        </li>
      </ul>
    </nav>
  );
};
