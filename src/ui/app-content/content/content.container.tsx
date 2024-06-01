import React from 'react';

import { appStep } from 'src/store/slices/app/app.selectors';
import Content from 'src/ui/app-content/content/content';
import { useAppSelector } from 'src/ui/common/hooks/store-hooks';

const ContentContainer: React.FC = () => {
  const step = useAppSelector(appStep);
  return <Content step={step} />;
};

export default ContentContainer;
