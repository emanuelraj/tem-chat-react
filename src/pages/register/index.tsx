import * as React from 'react';
import InputField from '../../components/Component.Inputfield/Component.Inputfield';
import Layout from '../../layouts/Layout';

class Register extends React.Component<any, any> {  
    public render() {
      return (
        <Layout.Auth title='Register'>
            <InputField.Textline>
            </InputField.Textline>
        </Layout.Auth>
      );
    }
}

export default Register;