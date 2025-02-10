import { appStep } from 'src/store/slices/app/app.selectors';
import { useViewerGeometry } from 'src/ui/app-content/content/three-d-model-viewer/contexts/viewer-geometry/use-viewer-geometry';
import ThreeDModelViewer from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-viewer';
import { useAppSelector } from 'src/ui/shared/hooks/store-hooks';

const ThreeDModelViewerContainer = () => {
  const step = useAppSelector(appStep);
  const { setOffsetWidth } = useViewerGeometry();
  return <ThreeDModelViewer step={step} setContentPanelOffsetWidth={setOffsetWidth} />;
};

export default ThreeDModelViewerContainer;
