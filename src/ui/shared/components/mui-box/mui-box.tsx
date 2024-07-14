import { Box, BoxProps } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import React from 'react';

const MUIBox = styled((props: BoxProps) => <Box {...props} />)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

export default MUIBox;
