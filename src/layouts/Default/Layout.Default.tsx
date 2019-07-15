import * as React from 'react';
import './Layout.Default.scss';

interface IProps {
  title: string;
}


class LayoutDefault extends React.Component<IProps, any> {


  public render() {
    return (
      <div className='layout--default'>
        <head>
          <title>Tem Chat | {this.props.title}</title>
        </head>
        <div className='layout--default__content'>{this.props.children}</div>
      </div>
    );
  }
}

export default LayoutDefault;
