import React, { Component } from 'react';
import '../App.css';

import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';

class Login extends Component {

  render() {

    const responseFacebook = (response) => {
        this.props.history.push('/contact')
      console.log(response);
      
    }

    const responseGoogle = (response) => {
        this.props.history.push('/contact')
      console.log(response);
    }

    return (
      <div className="App">
        <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

      <FacebookLogin
        appId="142364214443360" //APP ID NOT CREATED YET
        fields="name,email,picture"
        callback={responseFacebook}
      />
      <br />
      <br />


      <GoogleLogin
        clientId="528856648901-eu0tqtk4n8u8kdddpc0ivdbii5bfivbb.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />

      </div>
    );
  }
}

export default Login;