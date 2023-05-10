import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Auth0Provider
        domain="dev-dbkmqi3pbxve3ov8.us.auth0.com"
        clientId="Sb6hOdzQIxbkXw8bFKQGmiTfTWd0NVkz"
        authorizationParams={{
          redirect_uri: 'http://localhost:5173/user'
        }}
    >
        <App />
        </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);

