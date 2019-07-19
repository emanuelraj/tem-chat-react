import Styles from './Component.Inputfield.scss';
import * as React from 'react';
import classNames from 'classnames/bind';

interface IProps {
  value?: string;
  label?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

interface IState {
  focus: boolean;
}

export default class InputfieldPassword extends React.Component<IProps, IState> {

  public constructor(props: any) {
    super(props);
    this.state = { focus: false };
  }

  public render() {
    const cx = classNames.bind(Styles);
    const className = cx({
      ['inputfield']: true,
      ['inputfield--focus']: this.state.focus,
    });

    return (
      <div className={className}>
        <label className={Styles['inputfield__label']} >{this.props.label}</label>
        <input type="password"
          placeholder={this.props.placeholder}
          onChange={(e) => this.props.onChange(e.currentTarget.value)}
          onFocus={() => this.setState({ focus: true })}
          onBlur={() => this.setState({ focus: false })}
          value={this.props.value} 
		 />
      </div>
    );
  }
}
