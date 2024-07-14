import { SelectChangeEvent } from '@mui/material';
import React from 'react';

import { isEmpty } from 'src/common/helpers/guards';
import { availableAnimationList, selectedAnimationUUID } from 'src/store/slices/app/app.selectors';
import { setSelectedAnimationUUID } from 'src/store/slices/app/app.slice';
import MUISelect from 'src/ui/shared/components/mui-select/mui-select';
import { useAppDispatch, useAppSelector } from 'src/ui/shared/hooks/store-hooks';

const AnimationSelect: React.FC = () => {
  const animations = useAppSelector(availableAnimationList);
  const selectedAnimation = useAppSelector(selectedAnimationUUID);

  const dispatch = useAppDispatch();

  const setSelectedAnimation = (event: SelectChangeEvent) => {
    dispatch(setSelectedAnimationUUID({ animationUUID: event.target.value }));
  };

  return (
    <>
      {!isEmpty(animations) && (
        <MUISelect
          label={'Animations'}
          handleChange={setSelectedAnimation}
          currentOptionId={selectedAnimation}
          options={animations.map(animation => ({ id: animation.uuid, value: animation.name }))}
        />
      )}
    </>
  );
};

export default AnimationSelect;
