import { Container, ContainerProps } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import React from 'react';

import { appFooterHeightPx } from 'src/ui/app-content/app-footer/app-footer.consts';
import { windowMinWidth } from 'src/ui/shared/styles/consts';

const AppContainer = styled((props: ContainerProps) => <Container {...props} />)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  padding: 0,
  paddingBottom: `${appFooterHeightPx}px`,
  width: '100%',
  minWidth: windowMinWidth,
  minHeight: '100vh',
  margin: '0 auto',
}));

export default AppContainer;
