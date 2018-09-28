import * as React from 'react';
import { MiniMapProps } from './MiniMap';
import { XYFrameProps } from './XYFrame';

export interface MinimapXYFrameProps<
  TData extends {} | number[] = {},
  TAnnotation extends {} = {}
> extends XYFrameProps<TData, TAnnotation> {
  minimap?: XYFrameProps<TData, TAnnotation> & MiniMapProps;
  renderBefore?: JSX.Element[] | JSX.Element;
}

export class MinimapXYFrame<
  TData extends {} | number[] = {},
  TAnnotation extends {} = {}
> extends React.Component<MinimapXYFrameProps<TData, TAnnotation>, any> {
  constructor(props: MinimapXYFrameProps<TData, TAnnotation>) {
    super(props);
  }
  render(): JSX.Element {
    return <div />;
  }
}
