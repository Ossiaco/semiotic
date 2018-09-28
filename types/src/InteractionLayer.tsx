import * as React from 'react';

export type CustomHoverType =
  | boolean
  | Object
  | Array<Object | ((...args: any[]) => any)>
  | ((...args: any[]) => any);

export interface InteractionLayerProps {
  name?: string;
  interaction?: Object;
  overlay?: Array<Object>;
  oColumns?: Object;
  xScale: (...args: any[]) => any;
  yScale: (...args: any[]) => any;
  rScale?: (...args: any[]) => any;
  svgSize: Array<number>;
  hoverAnnotation?: CustomHoverType;
  interactionOverflow?: Object;
  size: Array<number>;
  projectedYMiddle?: string;
  projectedX: string;
  projectedY: string;
  points?: Array<Object>;
  enabled?: boolean;
  useSpans?: boolean;
  margin: Object;
  projection?: string;
  customDoubleClickBehavior?: (...args: any[]) => any;
  customClickBehavior?: (...args: any[]) => any;
  customHoverBehavior?: (...args: any[]) => any;
  voronoiHover: (...args: any[]) => any;
}

export class InteractionLayer extends React.Component<
  InteractionLayerProps,
  any
> {
  constructor(props: InteractionLayerProps) {
    super(props);
  }
  render(): JSX.Element {
    return <div />;
  }
}
