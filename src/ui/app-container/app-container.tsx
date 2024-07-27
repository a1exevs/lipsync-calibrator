import { Container, ContainerProps } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import React from 'react';

import { APP_FOOTER_HEIGHT_PX } from 'src/ui/app-content/app-footer/app-footer.consts';
import { windowMinWidth } from 'src/ui/shared/styles/consts';

const AppContainer = styled((props: ContainerProps) => <Container {...props} />)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  padding: 0,
  paddingBottom: `${APP_FOOTER_HEIGHT_PX}px`,
  width: '100vw',
  minWidth: windowMinWidth,
  minHeight: '100vh',
  margin: '0 auto',
  [theme.breakpoints.up('lg')]: {
    maxWidth: 'unset',
  },
}));

export default AppContainer;
