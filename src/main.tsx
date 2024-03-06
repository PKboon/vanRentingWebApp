import ReactDOM from 'react-dom/client';

import './scss/styles.scss'
import 'bootstrap';

import '../server.js';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
);
