import React from 'react';

import { capitalizeLabel } from 'src/common/helpers/string';
import { currentLang } from 'src/common/land/lang.helper';
import AppBar from 'src/ui/app-content/app-bar/app-bar';
import AppFooter from 'src/ui/app-content/app-footer/app-footer';
import ContentContainer from 'src/ui/app-content/content/content.container';

const AppContent: React.FC = () => {
  return (
    <>
      <AppBar title={capitalizeLabel(currentLang.labels.APP_NAME)} />
      <ContentContainer />
      <AppFooter />
    </>
  );
};

export default AppContent;
