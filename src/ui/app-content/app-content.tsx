import React from 'react';

import { capitalizeLabel } from 'src/common/helpers/string';
import { currentLang } from 'src/common/land/lang.helper';
import AppBar from 'src/ui/app-content/app-bar/app-bar';
import AppFooterContainer from 'src/ui/app-content/app-footer/app-footer.container';
import ContentContainer from 'src/ui/app-content/content/content.container';

const AppContent: React.FC = () => {
  return (
    <>
      <AppBar title={capitalizeLabel(currentLang.labels.APP_NAME)} />
      <ContentContainer />
      <AppFooterContainer />
    </>
  );
};

export default AppContent;
