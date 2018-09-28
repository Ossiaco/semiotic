import * as React from 'react';

export type DividedLineData = any[] | Object;

export interface DividedLineProps {
  parameters?: (...args: any[]) => any;
  className?: string;
  interpolate?: (...args: any[]) => any;
  data?: DividedLineData;
  lineDataAccessor?: (...args: any[]) => any;
  customAccessors?: Object;
  searchIterations?: number;
}

export class DividedLine extends React.Component<DividedLineProps, any> {
  constructor(props: DividedLineProps) {
    super(props);
  }
  render(): JSX.Element {
    return <div />;
  }
}
