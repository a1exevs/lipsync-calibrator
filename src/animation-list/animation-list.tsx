import React from 'react';

type Props = {
  availableAnimations: string[];
  // TODO Correct types when we will load animations via 3d model
  setSelectedAnimation: (_: string) => void;
};

const AnimationList: React.FC<Props> = () => {
  // TODO Implement me
  return <div>AnimationList</div>;
};

export default AnimationList;
