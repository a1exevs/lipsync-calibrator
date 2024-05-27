import React from 'react';

import { AnimationItem } from 'src/ui/app-content/content/animation-list/animation-list.types';

type Props = {
  availableAnimations: AnimationItem[];
  setSelectedAnimationUUID: (_: string) => void;
};

const AnimationList: React.FC<Props> = () => {
  // TODO Implement me
  return <div>AnimationList</div>;
};

export default AnimationList;
