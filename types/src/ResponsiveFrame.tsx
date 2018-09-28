import * as React from 'react';

export function createResponsiveFrame<
  P,
  T extends React.Component<P, React.ComponentState>,
  C extends React.ComponentClass<P>
>(_frame: React.ClassType<P, T, C>): typeof React.Component {
  return class ResponsiveFrame extends React.Component {};
}

export default createResponsiveFrame;
