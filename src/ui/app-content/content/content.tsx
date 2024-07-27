import React from 'react';

import { AppStep } from 'src/common/types/app';
import ErrorProvider from 'src/ui/app-content/content/error-bar/context/error.provider';
import ErrorBar from 'src/ui/app-content/content/error-bar/error-bar';
import ThreeDModelProvider from 'src/ui/app-content/content/three-d-model-viewer/contexts/three-d-model/three-d-model.provider';
import ViewerGeometryProvider from 'src/ui/app-content/content/three-d-model-viewer/contexts/viewer-geometry/viewer-geometry.provider';
import ThreeDModelViewerContainer from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-viewer.container';
import UIBlockerProvider from 'src/ui/app-content/content/ui-blocker/context/ui-blocker.provider';
import UIBlocker from 'src/ui/app-content/content/ui-blocker/ui-blocker';

type Props = {
  step: AppStep;
};

const Content: React.FC<Props> = () => {
  return (
    <UIBlockerProvider>
      <ErrorProvider>
        <ErrorBar />
        <UIBlocker />
        <ThreeDModelProvider>
          <ViewerGeometryProvider>
            <ThreeDModelViewerContainer />
          </ViewerGeometryProvider>
        </ThreeDModelProvider>
      </ErrorProvider>
    </UIBlockerProvider>
  );
};

export default Content;
