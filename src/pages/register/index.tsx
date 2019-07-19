import * as React from 'react';
import Inputfield from '../../components/Component.Inputfield/Component.Inputfield';
import Layout from '../../layouts/Layout';
import Card from '../../components/Component.Card/Component.Card';
import Button from '../../components/Component.Button/Component.Button';

class Register extends React.Component<any, any> {  
    public constructor(props: any) {
      super(props);
      this.state = {
        username: '',
        password: '',
        rememberMe: false,
        error: false,
        errorMessage: '',
      };
    }

    public doLogin(username: string, password: string) {
      console.log('Dss');
      //return true;
    }

    public render() {
      return (
        <Layout.Auth title='Register'>
          <Card>
          <Card.Header centered={true}>
            <Card.Title center={true}>Register</Card.Title>
          </Card.Header>
          {this.state.error ? (
            <Card.Notification type="Danger">
              <Card.Notification.Title>Oops!</Card.Notification.Title>
              <Card.Notification.Message>
                {this.state.errorMessage !== ''
                  ? this.state.errorMessage
                  : 'Something went wrong. Please try again. '}
              </Card.Notification.Message>
            </Card.Notification>
          ) : null}
               
          <Inputfield.Textline
            onChange={(val: string) => this.setState({ username: val })}
            label="email"
            autofocus={true}
            placeholder="Please enter your username"
          />
          <Inputfield.Password
            onChange={(val: string) => this.setState({ password: val })}
            label="Password"
            placeholder="Please enter your password"
          />
          <Card.Footer spacingTop={true}>
            <Button
              block={true}
              title="Sign in"
              size="large"
              onClick={() => this.doLogin(this.state.username, this.state.password)}
            />
            {/* <Button
              block={true}
              title="Need an account?"
              size="large"
              ghost={true}
              onClick={() => Router.pushRoute('/auth/register')} 
            /> */}
          </Card.Footer>
        </Card>
        </Layout.Auth>
      );
    }
}

export default Register;