import Typography from '@material-ui/core/Typography';
import React, { useEffect, useRef, useState } from 'react';
import { WebGLRenderer } from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

import { isNil, isNull } from 'src/common/helpers/guards';
import { calculatePercentage } from 'src/common/helpers/number';
import { getFileExtensionByPath, interpolateStrings } from 'src/common/helpers/string';
import { currentLang } from 'src/common/land/lang.helper';
import { Nullable } from 'src/common/types/common';
import { getDriverByFileExtension } from 'src/ui/app-content/content/three-d-model-viewer/drivers/driver-config-map';
import MUIBox from 'src/ui/common/components/mui-box/mui-box';
import MUIPaper from 'src/ui/common/components/mui-paper/mui-paper';

type Props = {
  /**
   * Path to 3d-model file.
   * @details: The viewer shows a model from the first not empty path and ignore changes of this prop
   */
  filePath: string;
  // TODO Correct types when we will load animations via 3d model
  selectedAnimation: string;
};

const ThreeDModelViewer: React.FC<Props> = ({ filePath }) => {
  const [progress, setProgress] = useState<number>(0);
  const mountRef = useRef<Nullable<HTMLDivElement>>(null);

  useEffect(() => {
    let renderer: Nullable<WebGLRenderer> = null;
    const mountedVariable = mountRef.current;
    try {
      const extension = getFileExtensionByPath(filePath);
      const driver = getDriverByFileExtension(extension);
      const camera = driver.getConfiguredCamera();
      renderer = driver.getWebGlRenderer();
      const light = driver.getLight();
      const scene = driver.getScene(light);

      mountRef.current?.appendChild(renderer.domElement);

      const loader = new FBXLoader();
      loader.load(
        filePath,
        object => driver.setModelToScene(object, scene),
        event => setProgress(calculatePercentage(event.loaded, event.total)),
        _ => {
          // TODO Show error via snack bar
        },
      );

      const animate = () => {
        requestAnimationFrame(animate);
        renderer?.render(scene, camera);
      };

      animate();
    } catch (_) {
      // TODO Show error via snack bar
    }

    return () => {
      if (!isNull(renderer) && !isNil(mountedVariable)) {
        mountedVariable.removeChild(renderer.domElement);
        renderer.dispose();
      }
    };
  }, []);

  return (
    <MUIBox>
      <Typography align="center" variant="subtitle1">
        {interpolateStrings(currentLang.messages.THREE_D_MODEL_LOADED, String(progress))}
      </Typography>
      <MUIPaper elevation={5}>
        <div ref={mountRef} />
      </MUIPaper>
    </MUIBox>
  );
};

export default ThreeDModelViewer;
