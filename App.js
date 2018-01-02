
import React, { Component } from 'react';
import { AppRegistry } from 'react-native'

import LoginScene from './iosApp/page/login/index'

export default class Login extends Component {
  render(){
    return (
      <LoginScene />
    )
  }
}

AppRegistry.registerComponent('Login', () => Login);