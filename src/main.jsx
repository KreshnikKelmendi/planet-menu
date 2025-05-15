import React from 'react';
import { createRoot } from 'react-dom/client';
import './i18n'; // i18n configuration
import App from './App';
import './index.css'; // Make sure you import your CSS file

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);