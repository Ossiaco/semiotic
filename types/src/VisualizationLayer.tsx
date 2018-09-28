import * as React from 'react';
import { AxisType } from './types/annotationTypes';
import { CanvasPostProcessType } from './types/generalTypes';

export interface VisualizationLayerProps<TData extends {} = {}> {
  axes?: Array<AxisType>;
  frameKey?: string;
  xScale: (...args: any[]) => any;
  yScale: (...args: any[]) => any;
  dataVersion?: string;
  canvasContext?: TData | null;
  size: Array<number>;
  margin: Object;
  canvasPostProcess?: CanvasPostProcessType<TData>;
  title?: Object | string;
  ariaTitle?: string;
  matte?: Node;
  matteClip?: boolean;
  voronoiHover: (...args: any[]) => any;
  renderPipeline: Object;
  baseMarkProps?: Object;
  projectedCoordinateNames: Object;
  position: Array<number>;
  disableContext?: boolean;
  renderOrder: Array<
    | 'pieces'
    | 'summaries'
    | 'connectors'
    | 'edges'
    | 'nodes'
    | 'areas'
    | 'lines'
    | 'points'
  >;
}

export class VisualizationLayer<
  TData extends {} = {} | number[]
> extends React.Component<VisualizationLayerProps<TData>, any> {
  constructor(props: VisualizationLayerProps<TData>) {
    super(props);
  }
  render(): JSX.Element {
    return <div />;
  }
}
