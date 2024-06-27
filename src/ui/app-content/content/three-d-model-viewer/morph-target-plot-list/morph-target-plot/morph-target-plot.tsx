import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import * as d3 from 'd3';
import React, { useEffect, useRef, useState } from 'react';

import { Nullable } from 'src/common/types/common';
import {
  defineLine,
  getXScaleFn,
  getYScaleFn,
  setPointsToPlot,
  setupDraggableFunctionality,
  setupXAxis,
  setupYAxis,
} from 'src/ui/app-content/content/three-d-model-viewer/morph-target-plot-list/morph-target-plot/morph-target-plot-helpers';
import {
  IdentifiedTimeValue,
  TimeValue,
} from 'src/ui/app-content/content/three-d-model-viewer/nav-bar/validators/json-structure-validator.types';

type Porps = {
  plotName: string;
  points: TimeValue[];
  updatePoints: (points: TimeValue[]) => void;
};

const MorphTargetPlot: React.FC<Porps> = ({ plotName, points, updatePoints }) => {
  const theme = useTheme();

  const textColor = theme.palette.text.primary;
  const svgRef = useRef<Nullable<SVGSVGElement>>(null);

  const [draggablePoints, setDraggablePoints] = useState<IdentifiedTimeValue[]>([]);
  const indexesPoints: IdentifiedTimeValue[] = points.map((p, index) => ({ ...p, id: index }));

  // TODO Move to consts
  const [width, setWidth] = useState(window.innerWidth * 0.9);
  const height = 200;
  const margin = { top: 20, right: 30, bottom: 50, left: 60 };
  const draggablePointSize = 5;
  const draggablePointColor = 'red';
  const xAxisLabel = 'Time, s';
  const yAxisLabel = 'Morph Target value';
  const lineColor = 'steelblue';

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth * 0.9);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!svgRef.current) {
      return;
    }
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();
    const xScaleFn = getXScaleFn({ points: indexesPoints, width, marginLeft: margin.left, marginRight: margin.right });
    const yScaleFn = getYScaleFn({ points: indexesPoints, height, marginTop: margin.top, marginBottom: margin.bottom });
    const xAxis = d3.axisBottom(xScaleFn);
    const yAxis = d3.axisLeft(yScaleFn);
    const bezierLine = defineLine({ xScaleFn, yScaleFn });
    setPointsToPlot({ svg, points: indexesPoints, line: bezierLine, lineColor });
    setupXAxis({ svg, xAxis, width, height, xAxisLabel, textColor, marginBottom: margin.bottom });
    setupYAxis({ svg, yAxis, height, yAxisLabel, textColor, marginLeft: margin.left });

    const drag = d3
      .drag<SVGCircleElement, IdentifiedTimeValue>()
      .on(
        'drag',
        (event: d3.D3DragEvent<SVGCircleElement, IdentifiedTimeValue, IdentifiedTimeValue>, d: IdentifiedTimeValue) => {
          const newX = xScaleFn.invert(event.x);
          const newY = yScaleFn.invert(event.y);
          let minDistance = Number.MAX_VALUE;
          let closePoint = indexesPoints[0];
          indexesPoints.forEach(currentPoint => {
            const distance = Math.abs(currentPoint.time - newX) + Math.abs(currentPoint.value - newY);
            if (distance < minDistance) {
              minDistance = distance;
              closePoint = currentPoint;
            }
          });
          updatePoints(
            indexesPoints.map(point => {
              if (point === closePoint) {
                return { time: newX, value: newY };
              }
              return { time: point.time, value: point.value };
            }),
          );
          setDraggablePoints(prevPoints =>
            prevPoints.map(point => {
              if (point.id === d.id) {
                return { id: point.id, time: newX, value: newY };
              }
              return point;
            }),
          );
        },
      );

    svg.on('click', (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
      const [x, y] = d3.pointer(event);
      const newPoint = { time: xScaleFn.invert(x), value: yScaleFn.invert(y) };

      setDraggablePoints(prevPoints => {
        const pointIndex = prevPoints.findIndex(
          p =>
            Math.abs(p.time - newPoint.time) < draggablePointSize &&
            Math.abs(p.value - newPoint.value) < draggablePointSize,
        );
        if (pointIndex >= 0) {
          return prevPoints.filter((_, index) => index !== pointIndex);
        }
        return [...prevPoints, { id: prevPoints.length, ...newPoint }];
      });
    });

    setupDraggableFunctionality({
      svg,
      draggablePoints,
      xScaleFn,
      yScaleFn,
      draggablePointSize,
      draggablePointColor,
      dragFn: drag as (
        selection: d3.Selection<SVGCircleElement | d3.BaseType, IdentifiedTimeValue, SVGSVGElement, unknown>,
      ) => void,
    });
  }, [points, width, draggablePoints]);

  return (
    <>
      <Typography variant="h6" align="center">
        {plotName}
      </Typography>
      <svg ref={svgRef} width={width} height={height} />
    </>
  );
};

export default MorphTargetPlot;
