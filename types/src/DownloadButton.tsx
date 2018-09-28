import * as React from 'react';

export interface DownloadButtonProps<TData extends {} = {}> {
  csvName: string;
  width?: number;
  label?: string;
  data: TData;
}

export class DownloadButto<TData extends {} = {}> extends React.Component<
  DownloadButtonProps<TData>,
  any
> {
  constructor(props: DownloadButtonProps<TData>) {
    super(props);
  }
  render(): JSX.Element {
    return <div />;
  }
}
