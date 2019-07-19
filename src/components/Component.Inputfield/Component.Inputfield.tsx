import * as React from 'react';
import InputfieldTextline from './Component.Inputfield.Textline';
import InputfieldPassword from './Component.Inputfield.Password';

class InputField extends React.Component<any, any> {
    static Textline = InputfieldTextline;
    static Password = InputfieldPassword;
  
    public render() {
      return (<React.Fragment></React.Fragment>);
    }
}

export default InputField;