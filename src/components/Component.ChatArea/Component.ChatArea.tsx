import * as React from 'react';
import './Component.ChatArea.scss';

interface IProps {
  title?: string;
}

export default class ChatArea extends React.Component<IProps, any> {

  public render() {
    return (
      <textarea className="chat_area">
      </textarea>
    );
  }
}
