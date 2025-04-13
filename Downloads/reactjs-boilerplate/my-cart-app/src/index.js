import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'; 
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Correct ID here
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);