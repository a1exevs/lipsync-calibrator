import React, { useEffect, useRef } from 'react';
import { AnimationMixer, Clock, Scene, WebGLRenderer } from 'three';
import { Camera } from 'three/src/cameras/Camera';

import { isNull } from 'src/common/helpers/guards';
import { Nullable } from 'src/common/types/common';
import { ResetErrorFn, SetErrorFn } from 'src/ui/app-content/content/error-context/error.types';
import { getDriverByFileExtension } from 'src/ui/app-content/content/three-d-model-viewer/drivers/driver-config-map';
import {
  SupportedThreeDModelExtension,
  ThreeDModel,
} from 'src/ui/app-content/content/three-d-model-viewer/drivers/driver-config-map.types';
import useClasses from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-viewer.styles';
import MUIPaper from 'src/ui/common/components/mui-paper/mui-paper';
import { elevationNormal } from 'src/ui/common/styles/consts';

type Props = {
  model: Nullable<ThreeDModel>;
  modelExtension: Nullable<SupportedThreeDModelExtension>;
  selectedAnimationUUID: Nullable<string>;
  setError: SetErrorFn;
  resetError: ResetErrorFn;
  blockUI: () => void;
  unblockUI: () => void;
};

const ThreeDModelViewer: React.FC<Props> = ({
  model,
  modelExtension,
  selectedAnimationUUID,
  setError,
  blockUI,
  unblockUI,
}) => {
  const mountRef = useRef<Nullable<HTMLDivElement>>(null);
  const rendererRef = useRef<Nullable<WebGLRenderer>>(null);
  const mixerRef = useRef<Nullable<AnimationMixer>>(null);
  const requestAnimationRef = useRef<Nullable<number>>(null);
  const clockRef = useRef<Nullable<Clock>>(null);
  const sceneRef = useRef<Nullable<Scene>>(null);
  const cameraRef = useRef<Nullable<Camera>>(null);

  const classes = useClasses();

  const animate = (): Nullable<number> => {
    if (isNull(requestAnimationRef.current)) {
      return null;
    }
    requestAnimationRef.current = requestAnimationFrame(animate);
    if (
      !isNull(sceneRef.current) &&
      !isNull(cameraRef.current) &&
      !isNull(mixerRef.current) &&
      !isNull(rendererRef.current) &&
      !isNull(clockRef.current)
    ) {
      mixerRef.current.update(clockRef.current.getDelta());
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    }
    return requestAnimationRef.current;
  };

  const init = (
    threeDModel: Nullable<ThreeDModel>,
    uuid: Nullable<string>,
  ): Nullable<{ renderer: WebGLRenderer; mixer: AnimationMixer; clock: Clock; scene: Scene; camera: Camera }> => {
    if (isNull(modelExtension) || isNull(threeDModel)) {
      return null;
    }

    const driver = getDriverByFileExtension(modelExtension);

    if (
      !isNull(sceneRef.current) &&
      !isNull(cameraRef.current) &&
      !isNull(mixerRef.current) &&
      !isNull(rendererRef.current) &&
      !isNull(clockRef.current)
    ) {
      if (isNull(uuid)) {
        driver.stopAllAnimations(mixerRef.current);
        requestAnimationRef.current = null;
        return null;
      }
      driver.rerunAnimation(threeDModel, selectedAnimationUUID, mixerRef.current);
      requestAnimationRef.current = -1;
      requestAnimationRef.current = animate();
      return {
        renderer: rendererRef.current,
        mixer: mixerRef.current,
        clock: clockRef.current,
        scene: sceneRef.current,
        camera: cameraRef.current,
      };
    }

    if (isNull(uuid)) {
      return null;
    }

    const clock = new Clock();
    const camera = driver.getConfiguredCamera();
    const renderer = driver.getWebGlRenderer();
    const light = driver.getLight();
    const scene = driver.getScene(light);
    const mixer: Nullable<AnimationMixer> = driver.setupAndPlayAnimation(threeDModel, selectedAnimationUUID);
    driver.setModelToScene(threeDModel, scene);

    requestAnimationRef.current = -1;
    requestAnimationRef.current = animate();

    return { renderer, mixer, clock, scene, camera };
  };

  const clearAnimationFrame = (): void => {
    if (!isNull(requestAnimationRef.current)) {
      cancelAnimationFrame(requestAnimationRef.current);
      requestAnimationRef.current = null;
    }
  };

  const unmountScene = (): void => {
    if (!isNull(rendererRef.current) && !isNull(mountRef.current)) {
      mountRef.current.removeChild(rendererRef.current.domElement);
      rendererRef.current.dispose();
      rendererRef.current.resetState();
      rendererRef.current = null;
    }
    if (!isNull(mixerRef.current)) {
      mixerRef.current.stopAllAction();
      mixerRef.current = null;
    }
    clockRef.current = null;
    sceneRef.current = null;
    cameraRef.current = null;
    clearAnimationFrame();
  };

  useEffect(() => {
    return () => unmountScene();
  }, []);

  useEffect(() => {
    try {
      // TODO Research why blockUI doesn't work
      blockUI();
      const result = init(model, selectedAnimationUUID);
      if (!isNull(result)) {
        const { renderer, mixer, clock, scene, camera } = result;
        rendererRef.current = renderer;
        mixerRef.current = mixer;
        clockRef.current = clock;
        cameraRef.current = camera;
        sceneRef.current = scene;
        mountRef.current?.appendChild(renderer.domElement);
      }
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message, 'error');
      }
    } finally {
      unblockUI();
    }
  }, [model, selectedAnimationUUID]);

  return (
    <MUIPaper className={classes.threeDModelViewer} elevation={elevationNormal}>
      <div ref={mountRef} />
    </MUIPaper>
  );
};

export default ThreeDModelViewer;
