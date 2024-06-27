import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider domain="dev-b7fnn7b4pw3mwgjs.us.auth0.com"
    clientId="TSiJzahBfRFQTUGFSCJE88tS0ijt7Zdq"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}> 
    <App />
    </Auth0Provider>
    
  </React.StrictMode>,
)
