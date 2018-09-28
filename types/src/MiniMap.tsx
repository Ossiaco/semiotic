import * as React from 'react';

export interface MiniMapProps {
  brushStart?: (e: number[]) => void;
  brush?: (e: number[]) => void;
  brushEnd?: (e: number[]) => any;
  xBrushExtent?: number[];
  yBrushExtent?: number[];
  xBrushable?: boolean;
  yBrushable?: boolean;
}

export class MiniMap<TFramProps> extends React.Component<
  MiniMapProps & TFramProps,
  any
> {
  constructor(props: MiniMapProps & TFramProps) {
    super(props);
  }
  render(): JSX.Element {
    return <div />;
  }
}
