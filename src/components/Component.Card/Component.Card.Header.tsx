import Styles from './Component.Card.scss';
import * as React from 'react';
import classNames from 'classnames/bind';

interface IProps {
  centered?: boolean;
}

export default class CardHeader extends React.Component<IProps, any> {
  public render() {
    const cx = classNames.bind(Styles);
    const className = cx({
      ['card__header']: true,
      ['card__header--centerd']: this.props.centered,
    });

    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}
