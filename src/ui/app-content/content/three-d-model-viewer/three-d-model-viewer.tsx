import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import IconButton from '@mui/material/IconButton';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useRef, useState } from 'react';

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

  const [isPlotPanelOpened, setPLotPanelShow] = useState<boolean>(false);

  const handlePlotPanelOpen = () => {
    setContentPanelOffsetWidth(contentPanelRef.current?.offsetWidth ?? null);
    setPLotPanelShow(show => !show);
  };

  return (
    <MUIBox className={classes.threeDModelViewer}>
      <MUIPaper className={classes.threeDModelViewer__leftPanel} elevation={elevationNormal}>
        <IconButton title={'Expand Plot panel'} onClick={handlePlotPanelOpen} aria-label="plot-panel-button">
          <ShowChartOutlinedIcon />
        </IconButton>
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
        {step === AppStep.THREE_D_MODEL_VIEWER_STEP && (
          <>
            <NavBarContainer />
          </>
        )}
      </MUIPaper>
    </MUIBox>
  );
};

export default ThreeDModelViewer;
