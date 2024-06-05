import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Muzan from './Muzan'
import Tanjiro from './Tanjiro'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Muzan/>
    <Tanjiro/>
  </React.StrictMode>
);

