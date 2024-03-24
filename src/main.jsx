import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Auth0Provider
        domain="gabrielsuarez.us.auth0.com"
        clientId="Afa9SMZrn5J4lFlsSOfZT706ST2oHZ7R"
        redirectUri={window.location.origin}
        // authorizationParams={{
        //   redirect_uri: window.location.origin
        // }}
      >
        <App />
      </Auth0Provider>
    </Router>
  </React.StrictMode>
);
