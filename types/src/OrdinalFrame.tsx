import * as React from 'react';
import { AnnotationHandling, CustomHoverType } from './types/annotationTypes';

import {
  CanvasPostProcessType,
  DataAccessorType,
  ExtentType,
  ProjectionTypes
} from './types/generalTypes';

export declare type SummaryTypes =
  | 'none'
  | 'histogram'
  | 'heatmap'
  | 'violin'
  | 'joy'
  | 'ridgeline'
  | 'boxplot'
  | 'contour';

export declare type SummaryTypeSettings = {
  type: SummaryTypes;
  amplitude?: number;
};

export declare type PieceTypes =
  | 'none'
  | 'bar'
  | 'clusterbar'
  | 'point'
  | 'swarm'
  | 'timeline';

export declare type PieceTypeSettings = { type: PieceTypes };

export interface OrdinalFrameProps<TData extends {} | number[] = {}> {
  type: PieceTypeSettings;
  summaryType: SummaryTypeSettings;
  connectorType?: (...args: any[]) => any;
  className?: string;
  annotationSettings?: AnnotationHandling<any>;
  size: Array<number>;
  downloadFields: Array<string>;
  rAccessor?: DataAccessorType<TData, string>;
  oAccessor?: DataAccessorType<TData, string>;
  oExtent?: ExtentType<TData>;
  rExtent?: ExtentType<TData>;
  name?: string;
  download: boolean;
  annotations: Array<Object>;
  matte?: Node;
  renderKey?: (...args: any[]) => any;
  interaction?: Object;
  customClickBehavior?: (...args: any[]) => any;
  customHoverBehavior?: (...args: any[]) => any;
  customDoubleClickBehavior?: (...args: any[]) => any;
  invertR: boolean;
  projection: ProjectionTypes;
  backgroundGraphics?: Node;
  foregroundGraphics?: Node;
  afterElements?: Node;
  beforeElements?: Node;
  disableContext?: boolean;
  summaryHoverAnnotation?: CustomHoverType;
  pieceHoverAnnotation?: CustomHoverType;
  hoverAnnotation?: CustomHoverType;
  canvasPostProcess?: CanvasPostProcessType;
  baseMarkProps?: Object;
  useSpans: boolean;
  canvasPieces?: boolean | ((...args: any[]) => any);
  canvasSummaries?: boolean | ((...args: any[]) => any);
  connectorClass?: string | ((...args: any[]) => any);
  pieceClass?: string | ((...args: any[]) => any);
  summaryClass?: string | ((...args: any[]) => any);
  connectorRenderMode?: string | ((...args: any[]) => any);
  connectorStyle?: Object | ((...args: any[]) => any);
  canvasConnectors?: boolean | ((...args: any[]) => any);
  summaryStyle?: Object | ((...args: any[]) => any);
  style?: Object | ((...args: any[]) => any);
  sortO?: (...args: any[]) => any;
  dynamicColumnWidth?: string | ((...args: any[]) => any);
  pieceIDAccessor?: string | ((...args: any[]) => any);
  ordinalAlign?: string;
  oLabel?: boolean | ((...args: any[]) => any);
  margin?:
    | number
    | { top?: number; left?: number; right?: number; bottom?: number };
  renderMode?: boolean | ((...args: any[]) => any);
  summaryRenderMode?: boolean | ((...args: any[]) => any);
  dataVersion?: string;
  svgAnnotationRules?: (...args: any[]) => any;
  htmlAnnotationRules?: (...args: any[]) => any;
  pixelColumnWidth?: number;
  title?: Node;
  oScaleType: (...args: any[]) => any;
  rScaleType: (...args: any[]) => any;
  legend?: Object;
  data: Array<Object | number>;
  oPadding?: number;
  axis?: Object | Array<Object>;
  summaryPosition?: (...args: any[]) => any;
  additionalDefs?: Node;
  tooltipContent?: (...args: any[]) => any;
  renderOrder?: Array<'pieces' | 'summaries' | 'connectors'>;
}

export class OrdinalFrame<
  TData extends {} | number[] = {}
> extends React.Component<OrdinalFrameProps<TData>, any> {
  constructor(props: OrdinalFrameProps<TData>) {
    super(props);
  }
  render(): JSX.Element {
    return <div />;
  }
}
