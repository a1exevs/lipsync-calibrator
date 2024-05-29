import React, { useEffect, useRef } from 'react';
import { AnimationMixer, Clock, Group, WebGLRenderer } from 'three';

import { isEmpty, isNil, isNull } from 'src/common/helpers/guards';
import { Nullable } from 'src/common/types/common';
import { ResetErrorFn, SetErrorFn } from 'src/ui/app-content/content/error-context/error.types';
import { getDriverByFileExtension } from 'src/ui/app-content/content/three-d-model-viewer/drivers/driver-config-map';
import { SupportedThreeDModelExtension } from 'src/ui/app-content/content/three-d-model-viewer/drivers/driver-config-map.types';
import useClasses from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-viewer.styles';
import MUIPaper from 'src/ui/common/components/mui-paper/mui-paper';
import { elevationNormal } from 'src/ui/common/styles/consts';

type Props = {
  /**
   * 3D model file.
   * @details: The viewer shows a model from the first not nullable model and ignore changes of this prop
   */
  model: Nullable<Group>;
  modelExtension: Nullable<SupportedThreeDModelExtension>;
  selectedAnimationUUID: Nullable<string>;
  setError: SetErrorFn;
  resetError: ResetErrorFn;
};

const ThreeDModelViewer: React.FC<Props> = ({ model, modelExtension, selectedAnimationUUID, setError }) => {
  const mountRef = useRef<Nullable<HTMLDivElement>>(null);

  const classes = useClasses();

  const init = async (threeDModel: Nullable<Group>): Promise<Nullable<WebGLRenderer>> => {
    if (isNull(threeDModel) || !isEmpty(mountRef?.current?.children)) {
      return null;
    }

    let renderer: Nullable<WebGLRenderer> = null;
    const clock = new Clock();
    const driver = getDriverByFileExtension(modelExtension);
    const camera = driver.getConfiguredCamera();
    renderer = driver.getWebGlRenderer();
    const light = driver.getLight();
    const scene = driver.getScene(light);

    mountRef.current?.appendChild(renderer.domElement);

    let mixer: Nullable<AnimationMixer> = null;

    mixer = driver.setupAndPlayAnimation(threeDModel, selectedAnimationUUID);
    driver.setModelToScene(threeDModel, scene);

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
    init(model)
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
  }, [model]);

  return (
    <MUIPaper className={classes.threeDModelViewer} elevation={elevationNormal}>
      <div ref={mountRef} />
    </MUIPaper>
  );
};

export default ThreeDModelViewer;
