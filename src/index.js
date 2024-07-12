import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-76dvlq81pcfozwnq.us.auth0.com"
    clientId="uBWhYTpohQhIqSKtzTpTJcj5gJKEsXA9"
    authorizationParams={{
      audience: "server-secret-id",
      redirect_uri: window.location.origin
    }}
    useRefreshTokens = {true}
    cacheLocation='localstorage'

  >
    <App />
  </Auth0Provider>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
