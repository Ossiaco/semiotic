import * as React from 'react';
import { MiniMapProps } from './MiniMap';
import { ResponsiveXYFrameProps } from './ResponsiveXYFrame';

export interface ResponsiveMinimapXYFrameProps<
  TData extends {} | number[] = {},
  TAnnotation extends {} = {}
> extends ResponsiveXYFrameProps<TData, TAnnotation> {
  minimap?: ResponsiveXYFrameProps<TData, TAnnotation> & MiniMapProps;
  renderBefore?: JSX.Element[] | JSX.Element;
}

export class ResponsiveMinimapXYFrame<
  TData extends {} | number[] = {}
> extends React.Component<ResponsiveMinimapXYFrameProps<TData>, any> {
  constructor(props: ResponsiveMinimapXYFrameProps<TData>) {
    super(props);
  }
  render(): JSX.Element {
    return <div />;
  }
}
