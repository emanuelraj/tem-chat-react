import Styles from './Component.Card.scss'
import * as React from 'react';
import classNames from 'classnames/bind';

interface IProps {
  spacingTop?: boolean;
  spacingBottom?: boolean;
}

export default class CardSection extends React.Component<IProps, any> {
  public render() {
    const cx = classNames.bind(Styles);
    const className = cx({
      ['card__section']: true,
      ['card__section--spacing-top']: this.props.spacingTop,
      ['card__section--spacing-bottom']: this.props.spacingBottom,
    });

    return (<div className={className}>{this.props.children}</div>);
  }
}
