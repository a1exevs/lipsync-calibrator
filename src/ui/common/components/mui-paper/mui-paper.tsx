import { Paper, PaperProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

import { GENERIC_PAPER_MARGIN, GENERIC_PAPER_PADDING } from './mui-paper.consts';

const MUIPaper = styled((props: PaperProps) => <Paper {...props} />)(({ theme }) => ({
  margin: theme.spacing(GENERIC_PAPER_MARGIN),
  padding: theme.spacing(GENERIC_PAPER_PADDING),
}));

export default MUIPaper;
