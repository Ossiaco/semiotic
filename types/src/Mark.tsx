import * as React from 'react';
import { RenderModes } from './types/generalTypes';

export interface MarkProps<TContext extends {} = {}> {
  markType: string;
  forceUpdate?: boolean;
  renderMode?: RenderModes;
  draggable: boolean;
  dropFunction?: (context: TContext) => void;
  resetAfter?: boolean;
  freezeX?: boolean;
  freezeY?: boolean;
  context?: TContext;
  updateContext?: () => TContext;
  className?: string;
}

export class Mark<TContext extends {} = {}> extends React.Component<
  MarkProps<TContext>,
  any
> {
  constructor(props: MarkProps<TContext>) {
    super(props);
  }
  render(): JSX.Element {
    return <div />;
  }
}
