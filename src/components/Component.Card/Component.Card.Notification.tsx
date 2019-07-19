import Styles from './Component.Card.scss';
import * as React from 'react';
import classNames from 'classnames/bind';
import { CardNotificationTitle } from './Component.Card.Notification.Title';
import { CardNotificationMessage } from './Component.Card.Notification.Message';

interface IProps {
  type: 'Danger' | 'Success';
}

export class CardNotification extends React.Component<IProps, any> {
  static Title = CardNotificationTitle;
  static Message = CardNotificationMessage;

  public render() {
    const cx = classNames.bind(Styles);
    const className = cx({
      ['card__notification']: true,
      ['card__notification--danger']: this.props.type === 'Danger',
      ['card__notification--success']: this.props.type === 'Success',
    });

    return <div className={className}>{this.props.children}</div>;
  }
}
