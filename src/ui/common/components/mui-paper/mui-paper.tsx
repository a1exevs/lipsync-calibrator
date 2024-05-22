import { Paper, PaperProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

import { spaceExtraSmall, spaceSuperSmall } from 'src/ui/common/styles/consts';

const MUIPaper = styled((props: PaperProps) => <Paper {...props} />)(({ theme }) => ({
  margin: theme.spacing(spaceExtraSmall),
  padding: theme.spacing(spaceSuperSmall),
}));

export default MUIPaper;
