import * as React from 'react';
import { AnnotationHandling, CustomHoverType } from './types/annotationTypes';
import {
  CanvasPostProcessType,
  DataAccessorType,
  IAnnotationRuleParams
} from './types/generalTypes';

export interface NetworkFrameProps<TData extends {} | number[] = {}> {
  dataVersion?: string;
  name: string;
  graph?: Object;
  nodes?: Array<Object>;
  edges?: Array<Object> | Object;
  networkType?: string | Object;
  size: Array<number>;
  nodeStyle?: Object | ((value: TData) => any);
  nodeClass?: string | ((value: TData) => string);
  canvasNodes?: boolean | ((value: TData) => boolean);
  edgeStyle?: Object | ((value: TData) => any);
  edgeClass?: string | ((value: TData) => string);
  canvasEdges?: boolean | ((value: TData) => boolean);
  nodeRenderMode?: string | ((value: TData) => string);
  edgeRenderMode?: string | ((value: TData) => string);
  nodeLabels?: boolean | ((value: TData) => boolean);
  title?: Node;
  legend?: Object;
  edgeRenderKey?: (value: TData) => string | number;
  nodeRenderKey?: (value: TData) => string | number;
  foregroundGraphics?: Node;
  backgroundGraphics?: Node;
  additionalDefs?: Node;
  htmlAnnotationRules?: (
    value: IAnnotationRuleParams<NetworkFrameProps<TData>, TData>
  ) => React.ReactHTMLElement<any>;
  svgAnnotationRules?: (
    value: IAnnotationRuleParams<NetworkFrameProps<TData>, TData>
  ) => React.ReactSVGElement;
  tooltipContent?: (value: TData) => any;
  annotations: Array<Object>;
  annotationSettings?: AnnotationHandling<any>;
  className?: string;
  customClickBehavior?: (value: TData) => any;
  customDoubleClickBehavior?: (value: TData) => any;
  customHoverBehavior?: (value: TData) => any;
  matte?: boolean | JSX.Element;
  useSpans?: boolean;
  beforeElements?: Node;
  afterElements?: Node;
  interaction?: {};
  hoverAnnotation?: CustomHoverType;
  download?: boolean;
  downloadFields?: Array<string>;
  baseMarkProps?: Object;
  canvasPostProcess?: CanvasPostProcessType;
  disableContext?: boolean;
  edgeWidthAccessor?: DataAccessorType<TData, string>;
  nodeSizeAccessor?: DataAccessorType<TData, number>;
  targetAccessor?: DataAccessorType<TData, string>;
  sourceAccessor?: DataAccessorType<TData, string>;
  nodeIDAccessor?: DataAccessorType<TData, string>;
  edgeType?: DataAccessorType<TData, string>;
  customNodeIcon?: (...args: any[]) => any;
  customEdgeIcon?: (...args: any[]) => any;
  margin?: number | Object;
  onNodeOut?: (...args: any[]) => any;
  onNodeClick?: (...args: any[]) => any;
  onNodeEnter?: (...args: any[]) => any;
  renderOrder?: Array<'edges' | 'nodes'>;
  filterRenderedNodes: (...args: any[]) => any;
}

export class NetworkFrame<
  TData extends {} | number[] = {}
> extends React.Component<NetworkFrameProps<TData>, any> {
  constructor(props: NetworkFrameProps<TData>) {
    super(props);
  }
  render(): JSX.Element {
    return <div />;
  }
}
