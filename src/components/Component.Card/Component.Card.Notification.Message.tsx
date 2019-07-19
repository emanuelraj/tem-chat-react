import Styles from './Component.Card.scss';
import * as React from 'react';
import classNames from 'classnames/bind';

export class CardNotificationMessage extends React.Component<any, any> {
  public render() {
    const cx = classNames.bind(Styles);
    const className = cx({
      ['card__notification__message']: true,
    });

    return <p className={className}>{this.props.children}</p>;
  }
}
