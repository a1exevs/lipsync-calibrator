import * as d3 from 'd3';

import { IdentifiedTimeValue } from 'src/ui/app-content/content/three-d-model-viewer/nav-bar/validators/json-structure-validator.types';

export const getXScaleFn = ({
  points,
  width,
  marginLeft,
  marginRight,
}: {
  points: IdentifiedTimeValue[];
  width: number;
  marginLeft: number;
  marginRight: number;
}): d3.ScaleLinear<number, number> => {
  return d3
    .scaleLinear()
    .domain([0, d3.max(points, d => d.time) ?? 0])
    .range([marginLeft, width - marginRight]);
};

export const getYScaleFn = ({
  points,
  height,
  marginTop,
  marginBottom,
}: {
  points: IdentifiedTimeValue[];
  height: number;
  marginTop: number;
  marginBottom: number;
}): d3.ScaleLinear<number, number> => {
  return d3
    .scaleLinear()
    .domain([0, d3.max(points, d => d.value) ?? 0])
    .range([height - marginBottom, marginTop]);
};

export const defineLine = ({
  xScaleFn,
  yScaleFn,
}: {
  xScaleFn: d3.ScaleLinear<number, number>;
  yScaleFn: d3.ScaleLinear<number, number>;
}): d3.Line<IdentifiedTimeValue> => {
  return d3
    .line<IdentifiedTimeValue>()
    .x(d => xScaleFn(d.time))
    .y(d => yScaleFn(d.value))
    .curve(d3.curveBasis);
};

export const setPointsToPlot = ({
  svg,
  points,
  line,
  lineColor,
}: {
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>;
  points: IdentifiedTimeValue[];
  line: d3.Line<IdentifiedTimeValue>;
  lineColor: string;
}): void => {
  svg
    .append('path')
    .datum(points)
    .attr('fill', 'none')
    .attr('stroke', lineColor)
    .attr('stroke-width', 2)
    .attr('d', line);
};

export const setupXAxis = ({
  svg,
  xAxis,
  width,
  height,
  marginBottom,
  textColor,
  xAxisLabel,
}: {
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>;
  xAxis: d3.Axis<d3.NumberValue>;
  width: number;
  height: number;
  marginBottom: number;
  textColor: string;
  xAxisLabel: string;
}): void => {
  svg
    .append('g')
    .attr('transform', `translate(0,${height - marginBottom})`)
    .call(xAxis)
    .append('text')
    .attr('x', width / 2)
    .attr('y', 35)
    .attr('fill', textColor)
    .attr('text-anchor', 'middle')
    .text(xAxisLabel);
};

export const setupYAxis = ({
  svg,
  yAxis,
  height,
  marginLeft,
  textColor,
  yAxisLabel,
}: {
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>;
  yAxis: d3.Axis<d3.NumberValue>;
  height: number;
  marginLeft: number;
  textColor: string;
  yAxisLabel: string;
}): void => {
  svg
    .append('g')
    .attr('transform', `translate(${marginLeft},0)`)
    .call(yAxis)
    .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('x', -height / 2)
    .attr('y', -45)
    .attr('fill', textColor)
    .attr('text-anchor', 'middle')
    .text(yAxisLabel);
};

export const setupDraggableFunctionality = ({
  svg,
  draggablePoints,
  xScaleFn,
  yScaleFn,
  draggablePointSize,
  draggablePointColor,
  dragFn,
}: {
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>;
  draggablePoints: IdentifiedTimeValue[];
  xScaleFn: d3.ScaleLinear<number, number>;
  yScaleFn: d3.ScaleLinear<number, number>;
  draggablePointSize: number;
  draggablePointColor: string;
  dragFn: (
    selection: d3.Selection<SVGCircleElement | d3.BaseType, IdentifiedTimeValue, SVGSVGElement, unknown>,
  ) => void;
}) => {
  svg
    .selectAll('circle')
    .data(draggablePoints)
    .join('circle')
    .attr('cx', d => xScaleFn(d.time))
    .attr('cy', d => yScaleFn(d.value))
    .attr('r', draggablePointSize)
    .attr('fill', draggablePointColor)
    .call(dragFn);
};
