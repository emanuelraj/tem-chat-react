import Styles from './Component.Card.scss';
import * as React from 'react';
import classNames from 'classnames/bind';

interface IProps {
  highlight?: boolean;
  icon?: JSX.Element;
  center?: boolean;
}

export default class CardTitle extends React.Component<IProps, any> {
  public render() {
    const cx = classNames.bind(Styles);
    const className = cx({
      ['card__title']: true,
      ['card__title--highlight']: this.props.highlight,
      ['card__title--centered']: this.props.center,
    });

    return (
      <h2 className={className}>
        {this.props.icon ? this.props.icon : null}
        {this.props.icon ? <span>{this.props.children}</span> : this.props.children}
      </h2>
    );
  }
}
