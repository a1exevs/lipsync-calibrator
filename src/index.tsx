import { ConfirmProvider } from 'material-ui-confirm';
import React from 'react';
import ReactDOM from 'react-dom/client';

import 'src/index.css';
import App from 'src/app';
import ThemedAppProvider from 'src/ui/themed-app-provider/themed-app-provider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemedAppProvider>
      <ConfirmProvider>
        <App />
      </ConfirmProvider>
    </ThemedAppProvider>
  </React.StrictMode>,
);
