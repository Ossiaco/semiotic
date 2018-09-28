import { CurveFactory } from 'd3';
export declare type ProjectionTypes = 'vertical' | 'horizontal' | 'radial';

export interface ProjectedPoint {
  x: string;
  y: string;
  yTop?: string;
  yMiddle?: string;
  yBottom?: string;
  parentArea?: Object;
  parentLine?: Object;
  percent?: number;
}

export declare type CanvasPostProcessType<TContext extends {} = {}> =
  | ((canvas: HTMLCanvasElement, context: TContext, size: number[]) => void)
  | 'chuckClose';

export declare type ExtentType<TData> =
  | number[]
  | {
      extent?: Array<TData>;
      onChange?: (d: TData) => any;
    };

export declare type MarginType =
  | number
  | { top: number; bottom: number; left: number; right: number };

export declare type RenderModes = 'sketchy' | 'painty';

export declare type DataCallbackType<TData> = ((d: TData) => number);

export declare type DataAccessorType<TData, TValue> =
  | ReadonlyArray<DataCallbackType<TData> | TValue>
  | DataCallbackType<TData>
  | TValue;

export declare type DataStyleType<TData> =
  | React.CSSProperties
  | ((d: ILine<TData>) => React.CSSProperties);

export interface IPoint {
  x: number;
  y: number;
}

export interface IDataPoint<TData> {
  coincidentPoints: IDataPoint<TData>[];
  data: TData;
  neighbors: IDataPoint<TData>[];
  parentLine: ILine<TData>;
  type: string;
  voronoiX: number;
  voronoiY: number;
  x: number;
  y: number;
  yBotttom: number;
  yMiddle: number;
  yTop: number;
}

export interface ILine<TData> {
  coordinates: IPoint[];
  data?: IDataPoint<TData>[];
  key: number;
  lineId: string;
}

export interface LineType {
  type:
    | 'line'
    | 'linepercent'
    | 'difference'
    | 'stackedarea'
    | 'stackedpercent'
    | 'bumpline'
    | 'bumparea';
  interpolator: CurveFactory;
}
export declare type AreaTypes =
  | 'none'
  | 'contour'
  | 'histogram'
  | 'heatmap'
  | 'violin'
  | 'joy'
  | 'ridgeline';

export interface AreaType {
  type: AreaTypes;
  thresholds: number;
  bandwidth: number;
  neighborhood: boolean;
}

export interface IAnnotationRuleParams<TProps, TData extends {} = {}> {
  d: TData;
  i: number;
  screenCoordinates: number[];
  xScale: number;
  yScale: number;
  xAccessor: DataAccessorType<TData, string>;
  yAccessor: DataAccessorType<TData, string>;
  xyFrameProps: TProps;
  xyFrameState: {};
  areas: TData[];
  points: TData[];
  lines: ILine<TData>[];
}
