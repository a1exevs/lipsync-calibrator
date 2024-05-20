import React from 'react';

import logo from 'src/logo.svg';
import 'src/app.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

const AppContainer: React.FC = () => {
  return (
    // TODO Uncomment me [146]
    // <Provider store={store}>
    <App />
    // </Provider>
  );
};

export default AppContainer;
