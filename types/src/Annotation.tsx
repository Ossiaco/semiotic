import * as React from 'react';

export interface SemioticAnnotationProps {
  noteData: {
    eventListeners: Object;
    events: Object;
    type: any;
    screenCoordinates: Array<Array<number>>;
    // What is this type supposed to be? It gets used only in a boolean context
    // I mostly assume this is used to indicate the presence of `nx`, `ny`, `dx`, `dy`
    coordinates: boolean;
    nx: number;
    ny: number;
    dx: number;
    dy: number;
    // TODO: What should this be typed as?
    note: Object;
  };
}

export class SemioticAnnotation extends React.Component<
  SemioticAnnotationProps,
  any
> {
  constructor(props: SemioticAnnotationProps) {
    super(props);
  }
  render(): JSX.Element {
    return <div />;
  }
}
