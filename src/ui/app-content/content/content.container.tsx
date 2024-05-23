import React from 'react';
import { useSelector } from 'react-redux';

import { appStep } from 'src/store/slices/app/app.selectors';
import Content from 'src/ui/app-content/content/content';

const ContentContainer: React.FC = () => {
  const step = useSelector(appStep);
  return <Content step={step} />;
};

export default ContentContainer;
