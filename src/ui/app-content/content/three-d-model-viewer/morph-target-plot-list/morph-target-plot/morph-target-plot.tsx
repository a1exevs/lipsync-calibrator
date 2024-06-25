import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';

import { Nullable } from 'src/common/types/common';
import {
  defineLine,
  getXScaleFn,
  getYScaleFn,
  setPointsToPlot,
} from 'src/ui/app-content/content/three-d-model-viewer/morph-target-plot-list/morph-target-plot/morph-target-plot-helpers';
import { TimeValue } from 'src/ui/app-content/content/three-d-model-viewer/nav-bar/validators/json-structure-validator.types';

type Porps = {
  points: TimeValue[];
};

const MorphTargetPlot: React.FC<Porps> = ({ points }) => {
  const svgRef = useRef<Nullable<SVGSVGElement>>(null);
  // TODO Move to consts
  const width = 1000;
  const height = 200;
  const margin = { top: 20, right: 30, bottom: 50, left: 60 };

  useEffect(() => {
    if (!svgRef.current) {
      return;
    }
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();
    const xScaleFn = getXScaleFn({ points, width, marginLeft: margin.left, marginRight: margin.right });
    const yScaleFn = getYScaleFn({ points, height, marginTop: margin.top, marginBottom: margin.bottom });
    const bezierLine = defineLine({ xScaleFn, yScaleFn });
    setPointsToPlot({ svg, points, line: bezierLine });
  }, [points]);

  return <svg ref={svgRef} width={width} height={height} />;
};

export default MorphTargetPlot;
