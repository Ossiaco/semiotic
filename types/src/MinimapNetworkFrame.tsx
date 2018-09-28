import * as React from 'react';

export type MinimapNetworkFrameXAccessor = string | ((...args: any[]) => any);

export type MinimapNetworkFrameYAccessor = string | ((...args: any[]) => any);

export type MinimapNetworkFrameLineDataAccessor =
  | string
  | ((...args: any[]) => any);

export type MinimapNetworkFrameLineType = string | Object;

export type MinimapNetworkFrameRenderBefore = any[] | Object;

export interface MinimapNetworkFrameProps {
  size?: any[];
  xAccessor?: MinimapNetworkFrameXAccessor;
  yAccessor?: MinimapNetworkFrameYAccessor;
  points?: any[];
  lines?: any[];
  areas?: any[];
  lineDataAccessor?: MinimapNetworkFrameLineDataAccessor;
  lineType?: MinimapNetworkFrameLineType;
  minimap?: Object;
  renderBefore?: MinimapNetworkFrameRenderBefore;
}
export class MinimapNetworkFrame extends React.Component<
  MinimapNetworkFrameProps,
  any
> {
  constructor(props: MinimapNetworkFrameProps) {
    super(props);
  }
  render(): JSX.Element {
    return <div />;
  }
}
