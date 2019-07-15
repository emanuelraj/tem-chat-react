import './Layout.Auth.scss';
import * as React from 'react';

interface IProps {
  title?: string;
}

export class LayoutAuth extends React.Component<IProps, any> {

  public render() {
    return (
      <React.Fragment>
        <head>
          <title>Tem Chat | {this.props.title}</title>
        </head>
        <div className='layout--auth'>
          <div className='layout--auth__content'>
            <img className='layout--auth__img'/>
            {this.props.children}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LayoutAuth;

