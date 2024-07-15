import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';

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
import MUIPaper from 'src/ui/shared/components/mui-paper/mui-paper';
import { elevationNormal } from 'src/ui/shared/styles/consts';

const ThreeDModelViewer: React.FC = () => {
  const classes = useClasses();

  return (
    <MUIPaper className={classes.threeDModelViewer} elevation={elevationNormal}>
      <Canvas>
        <OrbitControls />
        <directionalLight intensity={lightIntensity} color={lightColor} position={lightPosition} />
        <gridHelper args={[gridSize, gridDivision, gridColor1, gridColor2]} />
        <Suspense fallback={null}>
          <ThreeDModelSceneContainer />
        </Suspense>
        <axesHelper args={[axesSize]} />
      </Canvas>
      <NavBarContainer />
      <MorphTargetPlotListContainer />
    </MUIPaper>
  );
};

export default ThreeDModelViewer;
