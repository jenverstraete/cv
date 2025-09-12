import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from 'react-dom/client';
import "./i18n/config.ts";

import App from './App'

const root = createRoot(document.getElementById('root'));
root.render(
  <App />
);