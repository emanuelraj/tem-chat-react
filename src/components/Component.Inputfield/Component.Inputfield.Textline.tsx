import * as React from 'react';
import classNames from 'classnames/bind';
import Styles from './Component.Inputfield.scss';

interface IProps {
  value?: string;
  label?: string;
  placeholder?: string;
  focus?: (value: boolean) => void;
  onChange: (value: string) => void;
  readonly?: boolean;
  autofocus?: boolean;
}

interface IState {
  focus: boolean;
}

class InputfieldTextline extends React.Component<IProps, IState> {

    public constructor(props: any) {
      super(props);
      this.state = { focus: false };
    }
  
    public onFocus = () => {
      this.setState({ focus: true });
      if (this.props.focus) {
        return this.props.focus(true);
      }
    };

    public onBlur = () => {
      this.setState({ focus: false });
      if (this.props.focus) {
        return this.props.focus(false);
      }
    };
    public render() {
      const cx = classNames.bind(Styles);
      const className = cx({
        ['inputfield']: true,
        ['inputfield--focus']: this.state.focus,
      });

      return (
        <div className={className}>
        <label className={Styles['inputfield__label']}>
          {this.props.label}
        </label>
        <input
          type="text"
          autoFocus={this.props.autofocus ? true : false}
          placeholder={this.props.placeholder}
          onChange={e => this.props.onChange(e.currentTarget.value)}
          onFocus={() => this.setState({ focus: true })}
          onBlur={() => this.setState({ focus: false })}
          value={this.props.value}
          readOnly={this.props.readonly ? true : false}
        />
      </div>
      );
    }
}

export default InputfieldTextline;