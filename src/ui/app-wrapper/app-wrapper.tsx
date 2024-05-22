import { useTheme } from '@mui/material/styles';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const AppWrapper: React.FC<Props> = ({ children }) => {
  const theme = useTheme();
  return <div style={{ width: '100%', backgroundColor: theme.palette.background.default }}>{children}</div>;
};

export default AppWrapper;
