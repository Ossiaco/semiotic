import * as React from 'react';
import {
  AnnotationHandling,
  AnnotationTypes,
  AxisType
} from './types/annotationTypes';

export interface AnnotationLayerProps {
  useSpans: boolean;
  legendSettings?: {
    position: 'right' | 'left';
    title: string;
    legendGroups: Array<Object>;
  };
  margin: Object;
  size: Array<number>;
  axes?: Array<AxisType>;
  annotationHandling?: AnnotationHandling<any> | AnnotationTypes;
  annotations: Array<Object>;
  pointSizeFunction?: (...args: any[]) => any;
  labelSizeFunction?: (...args: any[]) => any;
  svgAnnotationRule: (...args: any[]) => any;
  htmlAnnotationRule: (...args: any[]) => any;
}

export class AnnotationLayer extends React.Component<
  AnnotationLayerProps,
  any
> {
  constructor(props: AnnotationLayerProps) {
    super(props);
  }
  render(): JSX.Element {
    return <div />;
  }
}
