import * as React from 'react';

export interface FacetControllerProps {
  children: Node;
  react15Wrapper: React.ReactElement<any>;
  sharedRExtent: boolean;
  sharedXExtent: boolean;
  sharedYExtent: boolean;
}

export class FacetController extends React.Component<
  FacetControllerProps,
  any
> {
  constructor(props: FacetControllerProps) {
    super(props);
  }
  render(): JSX.Element {
    return <div />;
  }
}
