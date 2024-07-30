import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import { Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { IconButtonOwnProps } from '@mui/material/IconButton/IconButton';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useRef, useState } from 'react';

import { currentLang } from 'src/common/land/lang.helper';
import { AppStep } from 'src/common/types/app';
import { Nullable } from 'src/common/types/common';
import FileUploaderContainer from 'src/ui/app-content/content/three-d-model-viewer/file-uploader/file-uploader.container';
import MorphTargetPlotListContainer from 'src/ui/app-content/content/three-d-model-viewer/morph-target-plot-list/morph-target-plot-list.container';
import NavBarContainer from 'src/ui/app-content/content/three-d-model-viewer/nav-bar/nav-bar.container';
import ThreeDModelSceneContainer from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-scene/three-d-model-scene.container';
import {
  axesSize,
  gridColor1,
  gridColor2,
  gridDivision,
  gridSize,
  lightColor,
  lightIntensity,
  lightPosition,
} from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-viewer.consts';
import useClasses from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-viewer.styles';
import MUIBox from 'src/ui/shared/components/mui-box/mui-box';
import MUIPaper from 'src/ui/shared/components/mui-paper/mui-paper';
import { elevationNormal } from 'src/ui/shared/styles/consts';

type Props = {
  step: AppStep;
  setContentPanelOffsetWidth: (_: Nullable<number>) => void;
};

const ThreeDModelViewer: React.FC<Props> = ({ step, setContentPanelOffsetWidth }) => {
  const classes = useClasses();

  const contentPanelRef = useRef<Nullable<HTMLDivElement>>(null);

  const [isPlotPanelOpened, setPLotPanelOpen] = useState<boolean>(false);

  const isViewerActive = step === AppStep.THREE_D_MODEL_VIEWER_STEP;

  useEffect(() => {
    if (step === AppStep.FILE_UPLOADER_STEP && isPlotPanelOpened) {
      setPLotPanelOpen(false);
    }
  }, [step]);

  const handlePlotPanelOpen = () => {
    setContentPanelOffsetWidth(contentPanelRef.current?.offsetWidth ?? null);
    setPLotPanelOpen(show => !show);
  };
  const getPlotPanelButtonTitle = (): string => {
    return isPlotPanelOpened ? currentLang.labels.COLLAPSE_PLOT_PANEL : currentLang.labels.EXPAND_PLOT_PANEL;
  };
  const getPlotPanelButtonColor = (): IconButtonOwnProps['color'] => {
    return isPlotPanelOpened ? 'primary' : 'default';
  };
  const getPlotPanelButtonTooltip = (): string => {
    return isViewerActive ? '' : currentLang.messages.PLOT_PANEL_NOT_AVAILABLE;
  };

  return (
    <MUIBox className={classes.threeDModelViewer}>
      <MUIPaper className={classes.threeDModelViewer__leftPanel} elevation={elevationNormal}>
        <Tooltip placement="right-end" title={getPlotPanelButtonTooltip()}>
          <div>
            <IconButton
              color={getPlotPanelButtonColor()}
              title={getPlotPanelButtonTitle()}
              onClick={handlePlotPanelOpen}
              aria-label="plot-panel-button"
              disabled={!isViewerActive}
            >
              <ShowChartOutlinedIcon />
            </IconButton>
          </div>
        </Tooltip>
      </MUIPaper>
      <div ref={contentPanelRef}>
        <MUIPaper className={classes.threeDModelViewer__contentPanel} elevation={elevationNormal}>
          <Canvas>
            <OrbitControls />
            <directionalLight intensity={lightIntensity} color={lightColor} position={lightPosition} />
            <gridHelper args={[gridSize, gridDivision, gridColor1, gridColor2]} />
            <Suspense fallback={null}>
              <ThreeDModelSceneContainer />
            </Suspense>
            <axesHelper args={[axesSize]} />
          </Canvas>
          {isPlotPanelOpened && <MorphTargetPlotListContainer />}
        </MUIPaper>
      </div>
      <MUIPaper className={classes.threeDModelViewer__rightPanel} elevation={elevationNormal}>
        {step === AppStep.FILE_UPLOADER_STEP && <FileUploaderContainer />}
        {isViewerActive && <NavBarContainer />}
      </MUIPaper>
    </MUIBox>
  );
};

export default ThreeDModelViewer;
