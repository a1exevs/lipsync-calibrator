import Switch, { SwitchProps } from '@material-ui/core/Switch';
import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

import { currentLang } from 'src/common/land/lang.helper';
import { durationSmall, MUISpacePx, opacityFull, spaceExtraSmall, spaceSuperSmall } from 'src/ui/shared/styles/consts';

const ANT_SWITCH_CHECKED_COLOR = '#fff';

const ANT_SWITCH_CHECKED_TRACK_BG_COLOR_DARK = '#177ddc';
const ANT_SWITCH_CHECKED_TRACK_BG_COLOR_LIGHT = '#1890ff';

const ANT_SWITCH_THUMB_BOX_SHADOW = '0 2px 4px 0 rgb(0 35 11 / 20%)';
const ANT_SWITCH_THUMB_BORDER_RADIUS = 6;

const ANT_SWITCH_TRACK_BORDER_RADIUS = 16 / 2;
const ANT_SWITCH_TRACK_BG_COLOR_DARK = 'rgba(255,255,255,.35)';
const ANT_SWITCH_TRACK_BG_COLOR_LIGHT = 'rgba(0,0,0,.25)';

const AntStyledSwitch = styled((props: SwitchProps) => <Switch {...props} />)(({ theme }) => ({
  width: 3.5 * MUISpacePx,
  height: 2 * MUISpacePx,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 2 * MUISpacePx - 1,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: `translateX(${MUISpacePx + 1}px)`,
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: spaceExtraSmall,
    '&.Mui-checked': {
      transform: `translateX(${1.5 * MUISpacePx}px)`,
      color: ANT_SWITCH_CHECKED_COLOR,
      '& + .MuiSwitch-track': {
        opacity: opacityFull,
        backgroundColor:
          theme.palette.mode === 'dark'
            ? ANT_SWITCH_CHECKED_TRACK_BG_COLOR_DARK
            : ANT_SWITCH_CHECKED_TRACK_BG_COLOR_LIGHT,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: ANT_SWITCH_THUMB_BOX_SHADOW,
    width: 1.5 * MUISpacePx,
    height: 1.5 * MUISpacePx,
    borderRadius: ANT_SWITCH_THUMB_BORDER_RADIUS,
    transition: theme.transitions.create(['width'], {
      duration: durationSmall,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: ANT_SWITCH_TRACK_BORDER_RADIUS,
    opacity: opacityFull,
    backgroundColor: theme.palette.mode === 'dark' ? ANT_SWITCH_TRACK_BG_COLOR_DARK : ANT_SWITCH_TRACK_BG_COLOR_LIGHT,
    boxSizing: 'border-box',
  },
}));

type Props = SwitchProps & { offLabel?: string; onLabel?: string };

const MUIAntSwitch: React.FC<Props> = ({
  offLabel = currentLang.labels.OFF,
  onLabel = currentLang.labels.ON,
  ...switchProps
}) => {
  return (
    <Stack direction="row" spacing={spaceSuperSmall} alignItems="center" padding={spaceSuperSmall}>
      <Typography>{offLabel}</Typography>
      <AntStyledSwitch {...switchProps} />
      <Typography>{onLabel}</Typography>
    </Stack>
  );
};

export default MUIAntSwitch;
