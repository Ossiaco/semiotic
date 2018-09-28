import { ScaleContinuousNumeric } from 'd3';
import * as React from 'react';
import { MarginType } from './types/generalTypes';

export type AxisLocationType = 'inside';
export type AxisAnchorType = 'start';

export type AxisLabelType =
  | string
  | {
      name: string;
      location: AxisLocationType;
      anchor: AxisAnchorType;
      locationDistance: number;
    };

export interface IAxisXY {
  orient?: 'left' | 'right' | 'top' | 'bottom';
  xy: {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
  };
  i: number;
}

export interface AxisProps<TAnnotation extends {} = {}> {
  annotationFunction?: (value: TAnnotation) => void;
  className?: string;
  format?: string;
  label?: AxisLabelType;
  margin?: MarginType;
  name?: string;
  orient?: 'left' | 'right' | 'top' | 'bottom';
  padding?: number;
  rotate?: number;
  scale?: ScaleContinuousNumeric<number, number>;
  size?: number[];
  tickFormat?: (tick: number) => string | JSX.Element;
  tickLineGenerator?: (xy: IAxisXY) => JSX.Element;
  ticks?: number;
  tickValues?: number[] | number;
}

export class Axis extends React.Component<AxisProps, any> {
  constructor(props: AxisProps) {
    super(props);
  }
  render(): JSX.Element {
    return <div />;
  }
}
