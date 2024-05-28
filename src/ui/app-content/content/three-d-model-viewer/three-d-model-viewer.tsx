import React, { useEffect, useRef } from 'react';
import { AnimationMixer, Clock, WebGLRenderer } from 'three';

import { isEmpty, isNil, isNull } from 'src/common/helpers/guards';
import { getFileExtensionByPath } from 'src/common/helpers/string';
import { Nullable } from 'src/common/types/common';
import { ResetErrorFn, SetErrorFn } from 'src/ui/app-content/content/error-context/error.types';
import { getDriverByFileExtension } from 'src/ui/app-content/content/three-d-model-viewer/drivers/driver-config-map';
import useClasses from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-viewer.styles';
import MUIPaper from 'src/ui/common/components/mui-paper/mui-paper';

type Props = {
  filePath: string;
  setError: SetErrorFn;
  resetError: ResetErrorFn;
};

const ThreeDModelViewer: React.FC<Props> = ({ setError, filePath }) => {
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

    const object = await loader.loadAsync(filePath);
    mixer = driver.setupAndPlayAnimation(object, null);
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
      .catch(e => {
        if (e instanceof Error) {
          setError(e.message, 'error');
        }
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
      <div ref={mountRef} />
    </MUIPaper>
  );
};

export default ThreeDModelViewer;
