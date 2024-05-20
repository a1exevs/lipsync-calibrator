import React from 'react';

import AnimationList from 'src/animation-list/animation-list';

const AnimationListContainer: React.FC = () => {
  // TODO get from redux
  const availableAnimations: string[] = [];
  const setSelectedAnimation = (_: string) => {
    // TODO set to redux
  };

  return (
    <AnimationList
      availableAnimations={availableAnimations}
      setSelectedAnimation={setSelectedAnimation}
    ></AnimationList>
  );
};

export default AnimationListContainer;
