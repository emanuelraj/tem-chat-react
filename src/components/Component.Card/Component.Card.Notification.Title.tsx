import Styles from './Component.Card.scss';
import * as React from 'react';
import classNames from 'classnames/bind';

export class CardNotificationTitle extends React.Component<any, any> {
  public render() {
    const cx = classNames.bind(Styles);
    const className = cx({
      ['card__notification__title']: true,
    });

    return <strong className={className}>{this.props.children}</strong>;
  }
}
