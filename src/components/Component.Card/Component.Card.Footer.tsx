import Styles from './Component.Card.scss';
import * as React from 'react';
import classNames from 'classnames/bind';

interface IProps {
  spacingTop?: boolean;
}

export default class CardFooter extends React.Component<IProps, any> {
  public render() {
    const cx = classNames.bind(Styles);
    const className = cx({
      ['card__footer']: true,
      ['card__footer--spacing-top']: this.props.spacingTop,
    });

    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}
