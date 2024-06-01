import React from 'react';
import { Provider } from 'react-redux';

import store from 'src/store/store';
import AppContainer from 'src/ui/app-container/app-container';
import AppContent from 'src/ui/app-content/app-content';
import AppWrapper from 'src/ui/app-wrapper/app-wrapper';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppWrapper>
        <AppContainer>
          <AppContent />
        </AppContainer>
      </AppWrapper>
    </Provider>
  );
};

export default App;
