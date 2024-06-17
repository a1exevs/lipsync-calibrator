import React from 'react';

import { availableAnimationList } from 'src/store/slices/app/app.selectors';
import { nextStep, setSelectedAnimationUUID } from 'src/store/slices/app/app.slice';
import AnimationList from 'src/ui/app-content/content/animation-list/animation-list';
import { useAppDispatch, useAppSelector } from 'src/ui/shared/hooks/store-hooks';

const AnimationListContainer: React.FC = () => {
  const availableAnimations = useAppSelector(availableAnimationList);

  const dispatch = useAppDispatch();

  const setSelectedAnimation = (animationUUID: string) => {
    dispatch(setSelectedAnimationUUID({ animationUUID }));
  };
  const goToNextAppStep = (): void => {
    dispatch(nextStep());
  };

  return (
    <AnimationList
      availableAnimations={availableAnimations}
      setSelectedAnimationUUID={setSelectedAnimation}
      goToNextStep={goToNextAppStep}
    ></AnimationList>
  );
};

export default AnimationListContainer;
