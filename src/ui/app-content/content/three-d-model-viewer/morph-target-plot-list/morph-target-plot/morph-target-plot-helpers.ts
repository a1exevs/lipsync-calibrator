import * as d3 from 'd3';

import { TimeValue } from 'src/ui/app-content/content/three-d-model-viewer/nav-bar/validators/json-structure-validator.types';

export const getXScaleFn = ({
  points,
  width,
  marginLeft,
  marginRight,
}: {
  points: TimeValue[];
  width: number;
  marginLeft: number;
  marginRight: number;
}): d3.ScaleLinear<number, number> => {
  return d3
    .scaleLinear()
    .domain([0, d3.max(points, d => d.time)!])
    .range([marginLeft, width - marginRight]);
};

export const getYScaleFn = ({
  points,
  height,
  marginTop,
  marginBottom,
}: {
  points: TimeValue[];
  height: number;
  marginTop: number;
  marginBottom: number;
}): d3.ScaleLinear<number, number> => {
  return d3
    .scaleLinear()
    .domain([0, d3.max(points, d => d.value)!])
    .range([height - marginBottom, marginTop]);
};

export const defineLine = ({
  xScaleFn,
  yScaleFn,
}: {
  xScaleFn: d3.ScaleLinear<number, number>;
  yScaleFn: d3.ScaleLinear<number, number>;
}): d3.Line<TimeValue> => {
  return d3
    .line<TimeValue>()
    .x(d => xScaleFn(d.time))
    .y(d => yScaleFn(d.value))
    .curve(d3.curveBasis);
};

export const setPointsToPlot = ({
  svg,
  points,
  line,
}: {
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>;
  points: TimeValue[];
  line: d3.Line<TimeValue>;
}): void => {
  svg
    .append('path')
    .datum(points)
    .attr('fill', 'none')
    .attr('stroke', 'steelblue')
    .attr('stroke-width', 2)
    .attr('d', line);
};
