import React from 'react';

import { isFirstStep } from 'src/store/slices/app/app.helpers';
import { appStep } from 'src/store/slices/app/app.selectors';
import AppFooter from 'src/ui/app-content/app-footer/app-footer';
import { useAppSelector } from 'src/ui/common/hooks/store-hooks';

const AppFooterContainer: React.FC = () => {
  const step = useAppSelector(appStep);

  return <AppFooter showBackButton={!isFirstStep(step)} />;
};

export default AppFooterContainer;
