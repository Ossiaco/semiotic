import * as React from 'react';

export interface BrushProps {
  size?: any[];
  position?: any[];
  selectedExtent?: any[];
  svgBrush?: (...args: any[]) => any;
}

export class Brush extends React.Component<BrushProps, any> {
  constructor(props: BrushProps) {
    super(props);
  }
  render(): JSX.Element {
    return <div />;
  }
}
