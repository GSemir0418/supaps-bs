import React from 'react';
import ReactDOM from 'react-dom';
import './shared/style.scss';
import App from './App';
import ReactParticleLine from 'react-particle-line';
import axios from './plugins/axios'
window.axios = axios;
ReactDOM.render(
  <React.StrictMode>
    <ReactParticleLine
      lineWidth={0.1}
      dotsNumber={100}
      dotsDistance={30}
<<<<<<< HEAD
      hoverEffect={false}>
      <App >
=======
      hoverEffect={false}
      style={{zIndex:'1'}}>
      <App style={{zIndex:'999'}}>
>>>>>>> 69788d11a9f792e794971c4d14aebdc1d50072a6
      </App>
    </ReactParticleLine>
  </React.StrictMode>,
  document.getElementById('root')
);

