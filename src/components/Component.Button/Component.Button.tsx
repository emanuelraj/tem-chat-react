import Styles from './Component.Button.scss';
import * as React from 'react';
import classNames from 'classnames/bind';

interface IProps {
  title: string;
  onClick?: () => void;
  theme?: 'default' | 'danger' | 'success' | 'grey';
  block?: boolean;
  size?: 'tiny' | 'large';
  ghost?: boolean;
  disabled?: boolean;
  key?: any;
  style?: any;
}

export default class Button extends React.Component<IProps, any> {
  public onClick(e: React.MouseEvent) {
    e.preventDefault();
    if (typeof this.props.onClick !== 'undefined') {
      this.props.onClick();
    }
  }

  public render() {
    const cx = classNames.bind(Styles);
    const className = cx({
      ['button']: true,
      ['button--block']: this.props.block,
      ['button--tiny']: this.props.size === 'tiny',
      ['button--large']: this.props.size === 'large',
      ['button--ghost']: this.props.ghost,
      ['button--grey']: this.props.theme === 'grey',
      ['button--success']: this.props.theme === 'success',
      ['button--danger']: this.props.theme === 'danger',
      ['button--disabled']: this.props.disabled,

    });

    return (
      <button
        onClick={(e: React.MouseEvent) => {
          typeof this.props.onClick !== 'undefined' ? this.onClick(e) : void(0) }
        }
        key={Math.random()}
        style={this.props.style}
        className={className}>
        {this.props.title}
      </button>
    );
  }
}
