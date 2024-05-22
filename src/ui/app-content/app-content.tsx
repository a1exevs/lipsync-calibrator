import React from 'react';

import { capitalizeLabel } from 'src/common/helpers/string';
import { currentLang } from 'src/common/land/lang.helper';
import AppBar from 'src/ui/app-content/app-bar/app-bar';
import AppFooter from 'src/ui/app-content/app-footer/app-footer';
import Content from 'src/ui/app-content/content/content';
import MUIBox from 'src/ui/common/components/mui-box/mui-box';
import { flexGrowNormal } from 'src/ui/common/styles/consts';

const AppContent: React.FC = () => {
  return (
    <>
      <AppBar title={capitalizeLabel(currentLang.labels.APP_NAME)}></AppBar>
      <Content />
      <AppFooter />
    </>
  );
};

export default AppContent;
