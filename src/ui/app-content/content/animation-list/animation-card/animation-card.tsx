import AnimationIcon from '@mui/icons-material/Animation';
import { Typography } from '@mui/material';
import React from 'react';

import { capitalize, interpolateStrings } from 'src/common/helpers/string';
import { currentLang } from 'src/common/land/lang.helper';
import useClasses from 'src/ui/app-content/content/animation-list/animation-card/animation-card.styles';
import MUIPaper from 'src/ui/common/components/mui-paper/mui-paper';
import { elevationNormal, textOverflowEllipsis } from 'src/ui/common/styles/consts';

type Props = {
  name: string;
  duration: number;
};
export const AnimationCard: React.FC<Props> = ({ name, duration }) => {
  const classes = useClasses();

  return (
    <MUIPaper elevation={elevationNormal} className={classes.animationCard}>
      <AnimationIcon fontSize="large" />
      <div className={classes.animationCard__rightBlock}>
        <Typography variant="h6" sx={{ ...textOverflowEllipsis() }} title={name}>
          {capitalize(name)}
        </Typography>
        <Typography variant="body1">{interpolateStrings(currentLang.labels.DURATION, String(duration))}</Typography>
      </div>
    </MUIPaper>
  );
};
