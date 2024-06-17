import Box from '@mui/material/Box';
import { BoxProps } from '@mui/material/Box/Box';
import { styled } from '@mui/material/styles';
import React from 'react';

const MUIBox = styled((props: BoxProps) => <Box {...props} />)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

export default MUIBox;
