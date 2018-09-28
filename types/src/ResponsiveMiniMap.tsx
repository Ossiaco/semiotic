import * as React from 'react'
import { MiniMapProps } from './MiniMap'

export interface ResponsiveMiniMapProps extends MiniMapProps {
  responsiveWidth?: boolean;
  responsiveHeight?: boolean;
}

export class ResponsiveMiniMap<TFramProps> extends React.Component<
  ResponsiveMiniMapProps & TFramProps,
  any
> {
  constructor(props: ResponsiveMiniMapProps & TFramProps) {
    super(props)
  }
  render(): JSX.Element {
    return <div />
  }
}
