import React from 'react';

import AnimationList from 'src/ui/app-content/content/animation-list/animation-list';
import { AnimationItem } from 'src/ui/app-content/content/animation-list/animation-list.types';

const AnimationListContainer: React.FC = () => {
  // TODO get from redux
  const availableAnimations: AnimationItem[] = [];
  const setSelectedAnimationUUID = (_: string) => {
    // TODO set to redux
  };

  return (
    <AnimationList
      availableAnimations={availableAnimations}
      setSelectedAnimationUUID={setSelectedAnimationUUID}
    ></AnimationList>
  );
};

export default AnimationListContainer;
