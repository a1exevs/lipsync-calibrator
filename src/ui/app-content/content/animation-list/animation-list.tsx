import React from 'react';

import { AnimationItem } from 'src/ui/app-content/content/animation-list/animation-list.types';

type Props = {
  availableAnimations: AnimationItem[];
  setSelectedAnimationUUID: (_: string) => void;
  goToNextStep: () => void;
};

const AnimationList: React.FC<Props> = () => {
  // TODO Uncomment me
  // const _handleAnimationCardClick = (_: string): void => {
  //   // TODO Implement me
  //
  //   goToNextStep();
  // };

  return <div>AnimationList</div>;
};

export default AnimationList;
