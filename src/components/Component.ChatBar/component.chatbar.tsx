import * as React from 'react';

interface IProps {
  title: string;
}

export default class ChatBar extends React.Component<IProps, any> {

  public render() {
      
    return (
      <button>
        {this.props.title}
      </button>
    );
  }
}
