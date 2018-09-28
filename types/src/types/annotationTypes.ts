import * as React from 'react';
import { Axis } from '../Axis';

export declare type CustomHoverType =
  | boolean
  | Array<Object | ((...args: any[]) => any)>
  | Object
  | ((...args: any[]) => any);

export declare type AnnotationOrientations =
  | 'nearest'
  | 'left'
  | 'right'
  | 'top'
  | 'bottom';
export type AnnotationTypes = 'marginalia' | 'bump' | false;

export interface AnnotationHandling<TAnnotation extends {} = {}> {
  dataVersion?: string;
  layout: {
    type: AnnotationTypes;
    orient?: AnnotationOrientations | Array<AnnotationOrientations>;
    characterWidth?: number;
    lineWidth?: number;
    lineHeight?: number;
    padding?: number;
    iterations?: number;
    pointSizeFunction?: (value: TAnnotation) => number;
    labelSizeFunction?: (value: TAnnotation) => number;
    marginOffset?: number;
  };
}

export declare type AxisType =
  | React.ReactElement<typeof Axis>
  | React.ReactElement<'g'>;
