import React from 'react';
import ReactDOM from 'react-dom';
import './shared/style.scss';
import App from './App';
import ReactParticleLine from 'react-particle-line';

ReactDOM.render(
  <React.StrictMode>
    <ReactParticleLine
      lineWidth={0.1}
      dotsNumber={80}
      dotsDistance={30}
      hoverEffect={true}>
      {/* ... */}
      <App >
      </App>
    </ReactParticleLine>
  </React.StrictMode>,
  document.getElementById('root')
);

