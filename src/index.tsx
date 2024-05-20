import React from 'react';
import ReactDOM from 'react-dom/client';

import 'src/index.css';
import AppContainer from 'src/app';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>,
);
