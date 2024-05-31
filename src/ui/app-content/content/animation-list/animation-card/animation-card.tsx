import AnimationIcon from '@mui/icons-material/Animation';
import { Typography } from '@mui/material';
import React from 'react';

import { capitalize, interpolateStrings } from 'src/common/helpers/string';
import { currentLang } from 'src/common/land/lang.helper';
import useClasses from 'src/ui/app-content/content/animation-list/animation-card/animation-card.styles';
import { calculateAnimationCardRightBlockWidth } from 'src/ui/app-content/content/animation-list/animation-card/animation.card.helpers';
import MUIBox from 'src/ui/common/components/mui-box/mui-box';
import MUIPaper from 'src/ui/common/components/mui-paper/mui-paper';
import { elevationNormal, textOverflowEllipsis } from 'src/ui/common/styles/consts';

type Props = {
  name: string;
  duration: number;
};

const AnimationCard: React.FC<Props> = ({ name, duration }) => {
  const classes = useClasses();
  const durationStr = interpolateStrings(currentLang.labels.DURATION, String(duration));

  // TODO: implement with using list https://mui.com/material-ui/react-list/
  return (
    <MUIBox className={classes.animationCard}>
      <MUIPaper className={classes.animationCard__paper} elevation={elevationNormal}>
        <AnimationIcon fontSize="large" />
        <div
          className={classes.animationCard__rightBlock}
          style={{ maxWidth: calculateAnimationCardRightBlockWidth() }}
        >
          <Typography variant="h6" sx={{ ...textOverflowEllipsis() }} title={name}>
            {capitalize(name)}
          </Typography>
          <Typography variant="body1" title={durationStr}>
            {durationStr}
          </Typography>
        </div>
      </MUIPaper>
    </MUIBox>
  );
};

export default AnimationCard;
