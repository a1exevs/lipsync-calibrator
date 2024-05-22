import React from 'react';

import AppContainer from 'src/ui/app-container/app-container';
import AppContent from 'src/ui/app-content/app-content';
import AppWrapper from 'src/ui/app-wrapper/app-wrapper';

const App: React.FC = () => {
  return (
    // TODO Uncomment me [146]
    // <Provider store={store}>
    <AppWrapper>
      <AppContainer>
        <AppContent />
      </AppContainer>
    </AppWrapper>
    // </Provider>
  );
};

export default App;
