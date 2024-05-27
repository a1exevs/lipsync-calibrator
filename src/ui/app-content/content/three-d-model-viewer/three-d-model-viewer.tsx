import Typography from '@material-ui/core/Typography';
import React, { useEffect, useRef, useState } from 'react';
import { AnimationMixer, Clock, WebGLRenderer } from 'three';

import { isEmpty, isNil, isNull } from 'src/common/helpers/guards';
import { calculatePercentage } from 'src/common/helpers/number';
import { getFileExtensionByPath, interpolateStrings } from 'src/common/helpers/string';
import { currentLang } from 'src/common/land/lang.helper';
import { Nullable } from 'src/common/types/common';
import { getDriverByFileExtension } from 'src/ui/app-content/content/three-d-model-viewer/drivers/driver-config-map';
import useClasses from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-viewer.styles';
import MUIPaper from 'src/ui/common/components/mui-paper/mui-paper';

type Props = {
  /**
   * Path to 3D model file.
   * @details: The viewer shows a model from the first not empty path and ignore changes of this prop
   */
  filePath: string;
  selectedAnimationUUID: string;
};

const ThreeDModelViewer: React.FC<Props> = ({ filePath, selectedAnimationUUID }) => {
  const [progress, setProgress] = useState<number>(0);
  const mountRef = useRef<Nullable<HTMLDivElement>>(null);

  const classes = useClasses();

  const init = async (): Promise<Nullable<WebGLRenderer>> => {
    if (!isEmpty(mountRef?.current?.children)) {
      return null;
    }

    let renderer: Nullable<WebGLRenderer> = null;
    const clock = new Clock();
    const extension = getFileExtensionByPath(filePath);
    const driver = getDriverByFileExtension(extension);
    const camera = driver.getConfiguredCamera();
    renderer = driver.getWebGlRenderer();
    const light = driver.getLight();
    const scene = driver.getScene(light);

    mountRef.current?.appendChild(renderer.domElement);

    const loader = driver.getLoader();
    let mixer: Nullable<AnimationMixer> = null;

    const object = await loader.loadAsync(filePath, event =>
      setProgress(calculatePercentage(event.loaded, event.total)),
    );
    mixer = driver.setupAndPlayAnimation(object, selectedAnimationUUID);
    driver.setModelToScene(object, scene);

    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (!isNull(mixer)) {
        mixer?.update(delta);
      }

      renderer?.render(scene, camera);
    };
    animate();

    return renderer;
  };

  useEffect(() => {
    const mountedVariable = mountRef.current;
    let renderer: Nullable<WebGLRenderer> = null;
    init()
      .then(result => {
        if (isNull(result)) {
          return;
        }

        renderer = result;
      })
      .catch(() => {
        // TODO Show error via snack bar
      });

    return () => {
      if (!isNull(renderer) && !isNil(mountedVariable)) {
        mountedVariable.removeChild(renderer.domElement);
        renderer.dispose();
      }
    };
  }, []);

  return (
    <MUIPaper className={classes.threeDModelViewer} elevation={5}>
      <Typography align="center" variant="subtitle1">
        {interpolateStrings(currentLang.messages.THREE_D_MODEL_LOADED, String(progress))}
      </Typography>
      <div ref={mountRef} />
    </MUIPaper>
  );
};

export default ThreeDModelViewer;
