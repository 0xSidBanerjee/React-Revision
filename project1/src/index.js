import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import Muzan from './Muzan'
// import Tanjiro from './Tanjiro'
// import Nezuko from './Nezuko';
import Greet from './Greet'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //These are props
  <React.StrictMode>
    <Greet name='Siddhant'/>
    <Greet name='Tanjiro'/>
    <Greet name='Inosuke'/>
    <Greet name='Zenitsu'/>
  </React.StrictMode>
);

