import * as React from 'react';
import { AxisType } from './types/annotationTypes';
import { MarginType } from './types/generalTypes';

export interface FrameProps {
  name?: string;
  title: Object;
  margin: MarginType;
  size: Array<number>;
  annotationSettings: Object;
  annotations?: Array<Object>;
  customHoverBehavior?: (...args: any[]) => any;
  customClickBehavior?: (...args: any[]) => any;
  customDoubleClickBehavior?: (...args: any[]) => any;
  htmlAnnotationRules?: (...args: any[]) => any;
  tooltipContent?: (...args: any[]) => any;
  className?: string;
  additionalDefs?: Node;
  interaction?: Object;
  renderFn?: string | ((...args: any[]) => any);
  hoverAnnotation?:
    | boolean
    | Object
    | Array<Object | ((...args: any[]) => any)>
    | ((...args: any[]) => any);
  backgroundGraphics?: Node;
  foregroundGraphics?: Node;
  interactionOverflow?: Object;
  disableContext?: boolean;
  canvasRendering?: boolean;
  useSpans: boolean;
  baseMarkProps?: Object;
  canvasPostProcess?: 'chuckClose' | ((...args: any[]) => any);
  projection?: string;
  rScale?: (...args: any[]) => any;
  columns?: Object;
  overlay?: Array<Object>;
  legendSettings?: Object;
  adjustedPosition: Array<number>;
  defaultHTMLRule: (...args: any[]) => any;
  defaultSVGRule: (...args: any[]) => any;
  downloadButton: Node;
  beforeElements?: Node;
  afterElements?: Node;
  points?: Array<Object>;
  projectedYMiddle?: string;
  dataVersion?: string;
  frameKey?: string;
  finalFilterDefs: Node;
  xScale: (...args: any[]) => any;
  yScale: (...args: any[]) => any;
  adjustedSize?: Array<number>;
  renderPipeline: Object;
  projectedCoordinateNames: Object;
  matte?: Node;
  axes?: Array<AxisType>;
  axesTickLines?: Node;
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

export class Frame extends React.Component<FrameProps, any> {
  constructor(props: FrameProps) {
    super(props);
  }
  render(): JSX.Element {
    return <div />;
  }
}
