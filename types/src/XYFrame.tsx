import { ScaleContinuousNumeric } from 'd3';
import * as React from 'react';
import { AxisProps } from './Axis';
import { LegendGroup } from './Legend';
import { AnnotationHandling, CustomHoverType } from './types/annotationTypes';
import {
  AreaType,
  AreaTypes,
  CanvasPostProcessType,
  DataAccessorType,
  DataStyleType,
  ExtentType,
  IAnnotationRuleParams,
  IDataPoint,
  ILine,
  LineType,
  MarginType,
  RenderModes
} from './types/generalTypes';

export interface XYFrameProps<
  TData extends {} | number[] = {},
  TAnnotation extends {} = {}
> {
  // General Properties
  size?: number[];
  xAccessor?: DataAccessorType<TData, string>;
  yAccessor?: DataAccessorType<TData, string>;
  title?: string | JSX.Element;
  margin?: MarginType;
  xScaleType?: () => ScaleContinuousNumeric<number, number>;
  yScaleType?: () => ScaleContinuousNumeric<number, number>;
  xExtent?: ExtentType<TData>;
  yExtent?: ExtentType<TData>;
  invertX?: boolean;
  invertY?: boolean;
  showLinePoints?: boolean;

  //Point Rendering
  points?: TData[];
  pointStyle?: React.CSSProperties | ((d: TData) => React.CSSProperties);
  pointClass?: string | ((d: TData) => string);
  canvasPoints?: ((d: TData) => boolean) | boolean;
  customPointMark?: JSX.Element | ((d: TData) => JSX.Element);

  // Line Rendering
  lines?: ILine<TData>[];
  lineDataAccessor?: DataAccessorType<TData, string>;
  lineType?: LineType;
  lineStyle?: DataStyleType<TData>;
  lineClass?: string | ((d: TData) => string);
  lineIDAccessor?: string | ((d: TData) => string);
  customLineMark?: ((d: TData) => JSX.Element);
  canvasLines?: ((d: TData) => boolean) | boolean;
  lineRenderMode?: RenderModes | ((d: TData) => RenderModes);
  defined?: ((d: TData) => boolean);

  // Area Rendering
  areas?: TData[];
  areaDataAccessor?: DataAccessorType<TData, string>;
  areaStyle?: DataStyleType<TData>;
  areaClass?: string | ((d: TData) => string);
  areaRenderMode?: RenderModes | ((d: TData) => RenderModes);
  areaType?: AreaTypes | AreaType;

  // Annotation and Decoration
  tooltipContent?: (d: IDataPoint<TData>) => JSX.Element;
  axes?: AxisProps[];
  legend?: boolean | { legendGroups: LegendGroup<TData>[] };
  annotations?: TAnnotation[];
  htmlAnnotationRules?: (
    value: IAnnotationRuleParams<XYFrameProps<TData>, TData>
  ) => React.ReactHTMLElement<any>;
  svgAnnotationRules?: (
    value: IAnnotationRuleParams<XYFrameProps<TData>, TData>
  ) => React.ReactSVGElement;
  annotationSettings?: AnnotationHandling<TAnnotation>;
  matte?: boolean | JSX.Element;
  backgroundGraphics?: JSX.Element | JSX.Element[];
  foregroundGraphics?: JSX.Element | JSX.Element[];
  canvasPostProcess?: CanvasPostProcessType;

  // Interaction
  hoverAnnotation?: CustomHoverType;
  customHoverBehavior?: (d: TData) => any;
  customClickBehavior?: (d: TData) => any;
  customDoubleClickBehavior?: (d: TData) => any;
  interaction?: {};

  // Miscellaneous
  dataVersion?: string;
  name: string;
  additionalDefs?: JSX.Element | JSX.Element[];
  download?: boolean | string;
  downloadFields?: string[];
  renderKey?: string | ((d: ILine<TData>) => string | number);

  /*
    afterElements?: Node;
    baseMarkProps?: {};
    beforeElements?: Node;
    canvasAreas?: ((...args: any[]) => any) | boolean;
    className?: string;
    customAreaMark?: (...args: any[]) => any;
    disableContext?: boolean;
    frameKey?: string;
    fullDataset?: Array<ProjectedPoint>;
    minimap?: Object;
    pointRenderMode?: string | Object | ((...args: any[]) => any);
    position?: number[];
    projectedAreas?: Array<Object>;
    projectedLines?: Array<Object>;
    projectedPoints?: Array<Object>;
    renderOrder?: Array<"lines" | "points" | "areas">;
    useSpans?: boolean;
    */
}

export class XYFrame<TData extends {} | number[] = {}> extends React.Component<
  XYFrameProps<TData>,
  any
> {
  constructor(props: XYFrameProps<TData>) {
    super(props);
  }
  render(): JSX.Element {
    return <div />;
  }
}
