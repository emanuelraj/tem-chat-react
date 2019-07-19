import * as Style from './Component.Card.scss';
import * as React from 'react';
import CardTitle from './Component.Card.Title';
import CardHeader from './Component.Card.Header';
import CardSection from './Component.Card.Section';
import CardFooter from './Component.Card.Footer';
import { CardNotification } from './Component.Card.Notification';
import classNames from 'classnames/bind';

interface IProps {
  theme?: 'success' | 'danger' | 'confetti';
}

export default class Card extends React.Component<IProps, any> {
  static Title = CardTitle;
  static Header = CardHeader;
  static Section = CardSection;
  static Footer = CardFooter;
  static Notification = CardNotification;

  public render() {
    const cx = classNames.bind(Style);
    const className = cx({
      ['card']: true,
      ['card--success']: this.props.theme === 'success',
      ['card--danger']: this.props.theme === 'danger',
      ['card--confetti']: this.props.theme === 'confetti',
    });

    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}
