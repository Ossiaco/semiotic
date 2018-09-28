import * as React from 'react';
import { XYFrameProps } from './XYFrame';

export interface ResponsiveXYFrameProps<
  TData extends {} | number[] = {},
  TAnnotation extends {} = {}
> extends XYFrameProps<TData, TAnnotation> {
  responsiveWidth?: boolean;
  responsiveHeight?: boolean;
}

export class ResponsiveXYFrame<
  TData extends {} | number[] = {},
  TAnnotation extends {} = {}
> extends React.Component<ResponsiveXYFrameProps<TData, TAnnotation>, any> {
  constructor(props: ResponsiveXYFrameProps<TData, TAnnotation>) {
    super(props);
  }
  render(): JSX.Element {
    return <div />;
  }
}
