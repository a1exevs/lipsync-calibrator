import { Typography } from '@mui/material';
import React from 'react';

import { sliceNumber } from 'src/common/helpers/number';
import { currentLang } from 'src/common/land/lang.helper';
import AnimationCard from 'src/ui/app-content/content/animation-list/animation-card/animation-card';
import useClasses from 'src/ui/app-content/content/animation-list/animation-list.styles';
import { AnimationItem } from 'src/ui/app-content/content/animation-list/animation-list.types';
import MUIBox from 'src/ui/common/components/mui-box/mui-box';

type Props = {
  availableAnimations: AnimationItem[];
  setSelectedAnimationUUID: (_: string) => void;
  goToNextStep: () => void;
};

const AnimationList: React.FC<Props> = ({ availableAnimations, setSelectedAnimationUUID, goToNextStep }) => {
  const classes = useClasses();

  const handleAnimationCardClick = (uuid: string): void => {
    setSelectedAnimationUUID(uuid);
    goToNextStep();
  };

  return (
    <MUIBox className={classes.animationList}>
      <Typography variant="h4" align="center">
        {currentLang.labels.AVAILABLE_ANIMATIONS}
      </Typography>
      <MUIBox>
        {availableAnimations.map(animation => (
          <MUIBox onClick={() => handleAnimationCardClick(animation.uuid)} key={animation.uuid}>
            <AnimationCard name={animation.name} duration={sliceNumber(animation.duration, 3)} />
          </MUIBox>
        ))}
      </MUIBox>
    </MUIBox>
  );
};

export default AnimationList;
