import { ListItem, ListItemText } from '@mui/material';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import React from 'react';

import { isEmpty } from 'src/common/helpers/guards';
import { currentLang } from 'src/common/land/lang.helper';
import { availableAnimationList, selectedAnimationUUIDs } from 'src/store/slices/app/app.selectors';
import { setSelectedAnimationUUIDs } from 'src/store/slices/app/app.slice';
import { AnimationItem } from 'src/store/slices/app/app.types';
import useClasses from 'src/ui/app-content/content/three-d-model-viewer/animation-select/animation-select.styles';
import MUIAntSwitch from 'src/ui/shared/components/mui-ant-switch/mui-ant-switch';
import MUIBox from 'src/ui/shared/components/mui-box/mui-box';
import { useAppDispatch, useAppSelector } from 'src/ui/shared/hooks/store-hooks';
import { textOverflowEllipsis } from 'src/ui/shared/styles/consts';

const AnimationSelect: React.FC = () => {
  const classes = useClasses();

  const animations = useAppSelector(availableAnimationList);
  const selectedAnimations = useAppSelector(selectedAnimationUUIDs);

  const dispatch = useAppDispatch();

  const setSelectedAnimation = (animationUUIDs: string[]) => {
    dispatch(setSelectedAnimationUUIDs({ animationUUIDs }));
  };

  const handleToggle = (uuid: string) => () => {
    const currentUUID = selectedAnimations.indexOf(uuid);
    const newSelectedAnimations = [...selectedAnimations];

    if (currentUUID === -1) {
      newSelectedAnimations.push(uuid);
    } else {
      newSelectedAnimations.splice(currentUUID, 1);
    }
    setSelectedAnimation(newSelectedAnimations);
  };

  const getAnimationItemId = (animation: AnimationItem) => {
    return `animation-list-${animation.uuid}`;
  };

  return (
    <MUIBox className={classes.animationSelect}>
      {!isEmpty(animations) && (
        <List
          className={classes.animationSelect__list}
          subheader={<ListSubheader>{currentLang.labels.ANIMATIONS}</ListSubheader>}
        >
          {animations.map(animation => {
            return (
              <ListItem key={getAnimationItemId(animation)}>
                <ListItemText
                  title={animation.name}
                  primaryTypographyProps={textOverflowEllipsis()}
                  id={getAnimationItemId(animation)}
                  primary={animation.name}
                />
                <MUIAntSwitch
                  edge="end"
                  onChange={handleToggle(animation.uuid)}
                  checked={selectedAnimations.indexOf(animation.uuid) !== -1}
                  inputProps={{
                    'aria-labelledby': `animation-list-${animation.uuid}`,
                  }}
                />
              </ListItem>
            );
          })}
        </List>
      )}
    </MUIBox>
  );
};

export default AnimationSelect;
