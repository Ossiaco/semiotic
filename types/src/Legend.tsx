import * as React from 'react';

export declare type SupportedLegendGlyps = 'fill' | 'line';

type ItemType = SupportedLegendGlyps | ((...args: any[]) => any);

export interface LegendGroup<TData extends {} = {}> {
  type?: ItemType;
  styleFn: (value: TData) => React.CSSProperties;
  items: Array<Object>;
  label: string;
}

export interface LegendProps<TData> {
  legendGroups: Array<LegendGroup<TData>>;
  title?: string;
  width?: number;
  height?: number;
  orientation?: string;
}

export class Legend<TData extends {} = {}> extends React.Component<
  LegendProps<TData>,
  any
> {
  constructor(props: LegendProps<TData>) {
    super(props);
  }
  render(): JSX.Element {
    return <div />;
  }
}
